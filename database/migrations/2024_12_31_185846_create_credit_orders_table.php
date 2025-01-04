<?php

use App\Models\CreditOrder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('credit_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id");
            $table->string("order_id")->unique();
            $table->integer("jumlah_credit");
            $table->float("price");
            $table->string("snap_token");
            $table->enum("status", [
                CreditOrder::SUCCESS,
                CreditOrder::PENDING,
                CreditOrder::EXPIRED,
                ""
            ])->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('credit_orders');
    }
};
