<?php

namespace App\Notification\Domain\Repository;

use App\Notification\Domain\Model\Mail;

interface MailRepositoryInterface
{
    public function send(Mail $mail): void;
}
