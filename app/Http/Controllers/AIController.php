<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\AiJudul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AIController extends Controller
{
    public function index()
    {
        return Inertia::render('Carijudul/Index');
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $validateData = $request->validate([
            'jurusan' => 'required',
            'jenis_penelitian' => 'required',
            'lokasi' => 'required',
            'tingkat_kesulitan' => 'required',
            'ai_response' => 'required',
        ]);

        $validateData['user_id'] = $user->id;

        $user->update(['credit' => $user->credit - 10]);

        AiJudul::create($validateData);

        return back()->with('success', "AI generate judul successfully!");
    }
}