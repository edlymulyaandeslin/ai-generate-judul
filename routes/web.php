<?php

use Inertia\Inertia;
use App\Models\CreditOrder;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AIController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CreditController;
use App\Http\Controllers\API\MidtransController;
use App\Http\Controllers\HistoryJudulController;
use App\Http\Controllers\HistoryOrderController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name("home");

Route::middleware("auth")->group(function () {
    // AI routing
    Route::get("/cari-judul-with-ai", [AIController::class, "index"])->name('carijudul');
    Route::post("/cari-judul-with-ai", [AIController::class, "store"])->name('carijudul.store');

    // Credit routing
    Route::get("/credits", [CreditController::class, "index"])->name('credits.index');
    Route::get("/credits/notenought", [CreditController::class, "notenought"])->name('credits.notenought');
    Route::post("/credits", [CreditController::class, "addMoreCredit"])->name('credits.add');

    // Midtrans routing
    Route::post("/midtrans/snaptoken/{credit}", [MidtransController::class, "getSnaptoken"])->name("midtrans.snaptoken");
    Route::get("/midtrans/{orderId}/status", [MidtransController::class, "getOrderStatus"])->name("midtrans.status");
    Route::delete("/midtrans/cancel", [MidtransController::class, "deleteLatestOrder"])->name("midtrans.cancel");

    // History Order routing
    Route::get("/history-order", [HistoryOrderController::class, "index"])->name("history.order");

    // History Judul routing
    Route::get("/history-judul", [HistoryJudulController::class, "index"])->name("history.judul");
    Route::get("/history-judul/{aijudul}", [HistoryJudulController::class, "show"])->name("history.show");
    Route::delete("/history-judul/{aijudul}", [HistoryJudulController::class, "destroy"])->name("history.destroy");
});

// Payment webhook
Route::get("/payment/webhook", [MidtransController::class, "webhook"])->name("midtrans.webhook");


// Page payment success
Route::get("/payment/{orderId}/success", function ($orderId) {
    $order = CreditOrder::where("order_id", $orderId)->first();

    if (!$order) {
        return redirect()->route("home")->with("error", "Order not found!");
    }

    return Inertia::render("PaymentSuccess", [
        "orderId" => $orderId
    ]);
})->name("payment.success");


require __DIR__ . '/auth.php';