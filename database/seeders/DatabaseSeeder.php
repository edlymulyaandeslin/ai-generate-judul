<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            "name" => "Super Silent",
            "email" => "super@gmail.com",
            "password" => bcrypt("password"),
            "is_premium" => true,
            'premium_expired' => now()->addYears(10),
        ]);
    }
}