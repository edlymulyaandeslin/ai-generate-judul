<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\AiJudul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

        DB::beginTransaction();
        try {
            $user->update(['credit' => $user->credit - 10]);

            AiJudul::create($validateData);
            DB::commit();
            return back()->with('success', "AI generate judul successfully!");
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', $e->getMessage());
        }
    }
}