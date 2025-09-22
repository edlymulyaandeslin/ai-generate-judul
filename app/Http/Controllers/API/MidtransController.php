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
    public function getSnapToken()
    {
        try {
            $orderId = "ORD-"  . now()->year . now()->month . now()->day . rand(1000, 9999);

            $price_pro_plan = 49000;

            $params = array(
                'transaction_details' => [
                    'order_id' => $orderId,
                    'gross_amount' => $price_pro_plan,
                ],
                'customer_details' => [
                    'first_name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                ],
                "item_details" => [
                    [
                        'id' => 'PRO-PLAN-1BULAN',
                        "price" => $price_pro_plan,
                        "quantity" => 1,
                        "name" => "Pro Plan - 1 Bulan"
                    ]
                ]
            );

            $snap_token = \Midtrans\Snap::getSnapToken($params);

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

    public function webhook(Request $request)
    {
        $result = $request->all();
        $status_code = $result['status_code'];
        $transaction_status = $result['transaction_status'];
        $success = false;

        if ($status_code == 200 && ($transaction_status == 'capture' || $transaction_status == 'settlement')) {
            $user = Auth::user();
            $user->is_premium = true;
            $user->premium_expired = now()->addMonth();
            $user->save();

            $success = true;
        }

        return response()->json([
            'success' => $success,
            'transaction_status' => $transaction_status
        ]);
    }
}