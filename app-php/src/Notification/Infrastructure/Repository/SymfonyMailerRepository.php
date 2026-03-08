<?php

namespace App\Notification\Infrastructure\Repository;

use App\Notification\Domain\Model\Mail;
use App\Notification\Domain\Repository\MailRepositoryInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class SymfonyMailerRepository implements MailRepositoryInterface
{
    public function __construct(
        private readonly MailerInterface $mailer
    ) {}

    public function send(Mail $mail): void
    {
        $email = (new Email())
            ->from($mail->getFrom())
            ->to($mail->getTo())
            ->subject($mail->getSubject())
            ->text($mail->getText());

        if ($mail->getHtml()) {
            $email->html($mail->getHtml());
        }

        $this->mailer->send($email);
    }
}
