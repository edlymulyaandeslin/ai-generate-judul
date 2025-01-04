<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Credit;
use Illuminate\Http\Request;

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
}