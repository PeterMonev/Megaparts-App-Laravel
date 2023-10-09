<?php

namespace App\Console\Commands;

use App\Mail\UsersNotifacation;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendEmailToAllUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:sendtoall';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send an email to all registered users';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $users =  User::all();

        foreach ($users as $user){
            Mail::to($user->email)->send(new UsersNotifacation());
        }
    }
}
