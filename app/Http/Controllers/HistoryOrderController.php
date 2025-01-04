<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CreditOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HistoryOrderController extends Controller
{
    public function index()
    {
        $listOrder = CreditOrder::where("user_id", Auth::user()->id)->latest()->get();

        return Inertia::render("HistoryOrder/Index", [
            'listOrder' => $listOrder
        ]);
    }
}
