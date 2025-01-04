<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {

        $users = User::latest()->get();
        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }
    public function edit(User $user) {}
    public function update(User $user, Request $request) {}
}
