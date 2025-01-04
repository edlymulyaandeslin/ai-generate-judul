<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreditOrder extends Model
{
    /** @use HasFactory<\Database\Factories\CreditOrderFactory> */
    use HasFactory;

    public const SUCCESS = "success";
    public const PENDING = "pending";
    public const EXPIRED = "expired";
    public const FAILED = "failed";

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function allStatus()
    {
        return [
            'SUCCESS' => self::SUCCESS,
            'PENDING' => self::PENDING,
            'EXPIRED' => self::EXPIRED,
        ];
    }
}
