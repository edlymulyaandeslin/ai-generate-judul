<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\AiJudul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HistoryJudulController extends Controller
{
    public function index()
    {
        $listJudul = AiJudul::where("user_id", Auth::user()->id)->latest()->paginate(5);
        return Inertia::render("HistoryJudul/Index", [
            "listJudul" => $listJudul
        ]);
    }

    public function show(AiJudul $aijudul)
    {
        return response()->json($aijudul);
    }

    public function destroy(AiJudul $aijudul)
    {
        $aijudul->delete();

        return back()->with("success", "AI response dihapus!");
    }
}