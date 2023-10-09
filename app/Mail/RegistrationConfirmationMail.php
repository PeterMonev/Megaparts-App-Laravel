<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegistrationConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    public function build()
    {
        return $this->subject('Thank you for registering!')
                    ->view('emails.registrationConfirmation');
    }
}
