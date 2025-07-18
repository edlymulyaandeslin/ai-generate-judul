<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Credit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CreditController extends Controller
{
    public function index(Request $request)
    {
        $credits = Credit::all();
        return Inertia::render('Credits/Index', [
            'credits' => $credits
        ]);
    }

    public function notenought()
    {
        return redirect()->route("credits.index")->with('error', "You don't have enough credits!");
    }

    public function addMoreCredit(Request $request)
    {
        $user = Auth::user();
        $new_credit = $request->credit;
        $user->credit += $new_credit;
        $user->save();

        return back()->with('success', $new_credit . " credit ditambahkan!");
    }
}