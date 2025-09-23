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
        $jumlah_judul = AiJudul::where('user_id', Auth::id())->count();
        return Inertia::render('Carijudul/Index', [
            'jumlah_judul' => $jumlah_judul,
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $jumlah_judul = AiJudul::where('user_id', $user->id)->count();
        if (!$user->is_premium && $jumlah_judul > 0) {
            return back()->with('error', "You must be a premium user to access this feature.");
        }

        $validateData = $request->validate([
            'jurusan' => 'required',
            'jenis_penelitian' => 'required',
            'lokasi' => 'required',
            'tingkat_kesulitan' => 'required',
            'ai_response' => 'required',
        ]);
        $validateData['user_id'] = $user->id;

        AiJudul::create($validateData);
        return back()->with('success', "AI generate judul successfully!");
    }
}