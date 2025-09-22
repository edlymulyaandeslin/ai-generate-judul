<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AIController;
use App\Http\Controllers\API\MidtransController;
use App\Http\Controllers\HistoryJudulController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name("home");

Route::middleware("auth")->group(function () {
    // AI routing
    Route::get("/cari-judul-with-ai", [AIController::class, "index"])->name('carijudul');
    Route::post("/cari-judul-with-ai", [AIController::class, "store"])->name('carijudul.store');

    // Midtrans routing
    Route::post("/midtrans/snaptoken", [MidtransController::class, "getSnaptoken"])->name("midtrans.snaptoken");
    // Webhook after payment
    Route::post("/midtrans/webhook", [MidtransController::class, "webhook"])->name("midtrans.webhook");

    // History Judul routing
    Route::get("/history-judul", [HistoryJudulController::class, "index"])->name("history.judul");
    Route::get("/history-judul/{aijudul}", [HistoryJudulController::class, "show"])->name("history.show");
    Route::delete("/history-judul/{aijudul}", [HistoryJudulController::class, "destroy"])->name("history.destroy");

    Route::get('/upgrade', function () {
        return Inertia::render('Upgrade');
    })->name("upgrade");
});



require __DIR__ . '/auth.php';