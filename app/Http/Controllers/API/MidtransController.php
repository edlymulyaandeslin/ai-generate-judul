<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Models\Credit;
use App\Models\CreditOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MidtransController extends Controller
{
    public function getSnapToken(Credit $credit)
    {
        try {
            $orderId = "ORDC" . $credit->id . "-" . now()->year . now()->month . now()->day . rand(1000, 9999);

            $params = array(
                'transaction_details' => [
                    'order_id' => $orderId,
                    'gross_amount' => $credit->price,
                ],
                'customer_details' => [
                    'first_name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                ],
                "item_details" => [
                    [
                        "id" => $credit->id,
                        "price" => round($credit->price / $credit->credit),
                        "quantity" => $credit->credit,
                        "name" => "Credit " . $credit->title
                    ]
                ]
            );

            $snap_token = \Midtrans\Snap::getSnapToken($params);

            Auth::user()->credit_orders()->create([
                "order_id" => $orderId,
                "jumlah_credit" => $credit->credit,
                "price" => $credit->price,
                "snap_token" => $snap_token,
                "status" => ""
            ]);

            return response()->json([
                "success" => true,
                "snap_token" => $snap_token,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => $e->getMessage()
            ]);
        }
    }

    public function getOrderStatus($orderId)
    {
        try {
            $status = \Midtrans\Transaction::status($orderId);

            return response()->json([
                "success" => true,
                "response" => $status
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => $e->getMessage()
            ]);
        }
    }

    public function deleteLatestOrder()
    {
        CreditOrder::where("status", "")->delete();
    }

    public function webhook(Request $request)
    {
        try {
            $transaction_status = $request->transaction_status;
            $orderId = $request->order_id;
            $creditOrder = CreditOrder::where("order_id", $orderId)->first();

            $user = User::find($creditOrder->user_id);

            if ($transaction_status == "settlement") {
                $creditOrder->status = CreditOrder::SUCCESS;
                $creditOrder->save();

                $user->credit += $creditOrder->jumlah_credit;
                $user->save();

                // return redirect()->away("http://localhost:8000/payment/$orderId/success");
                return redirect("/payment/$orderId/success");
            } else if ($transaction_status == "pending") {
                $creditOrder->status = CreditOrder::PENDING;
                $creditOrder->save();

                session()->flash("warning", "Top up is pending!");

                // return redirect()->away("http://localhost:8000/history-order");
                return redirect("/history-order");
            } else if ($transaction_status == "expire") {
                $creditOrder->status = CreditOrder::EXPIRED;
                $creditOrder->save();

                session()->flash("error", "Top up expired!");

                // return redirect()->away("http://localhost:8000/history-order");
                return redirect("/history-order");
            } else {
                $creditOrder->status = CreditOrder::FAILED;
                $creditOrder->save();

                session()->flash("error", "Top up failed!");

                // return redirect()->away("http://localhost:8000/credits");
                return redirect("/credits");
            }
        } catch (\Exception $e) {
            dd("masuk ke exception");
            // return redirect()->away("http://localhost:8000/credits")->with("error", $e->getMessage());
            return redirect("/credits")->with("error", $e->getMessage());
        }
    }
}