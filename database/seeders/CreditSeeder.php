<?php

namespace Database\Seeders;

use App\Models\Credit;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CreditSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Credit::create([
            "title" => "Basic",
            "credit" => 50,
            "price" => 30000
        ]);
        Credit::create([
            "title" => "Premium",
            "credit" => 100,
            "price" => 50000
        ]);
        Credit::create([
            "title" => "Super",
            "credit" => 200,
            "price" => 100000
        ]);
    }
}