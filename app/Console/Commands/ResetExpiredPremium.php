<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class ResetExpiredPremium extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:reset-expired-premium';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset status premium untuk user yang sudah expired';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $expiredUsers = User::where('is_premium', true)
            ->whereNotNull('premium_expired')
            ->where('premium_expired', '<', now())
            ->get();

        foreach ($expiredUsers as $user) {
            $user->is_premium = false;
            $user->save();
        }

        $this->info("Berhasil reset " . $expiredUsers->count() . " user premium expired.");
    }
}