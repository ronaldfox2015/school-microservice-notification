<?php

namespace App\Notification\Domain\Model;

class Mail
{
    public function __construct(
        private readonly string $from,
        private readonly string $to,
        private readonly string $subject,
        private readonly string $text,
        private readonly ?string $html = null
    ) {}

    public function getFrom(): string
    {
        return $this->from;
    }

    public function getTo(): string
    {
        return $this->to;
    }

    public function getSubject(): string
    {
        return $this->subject;
    }

    public function getText(): string
    {
        return $this->text;
    }

    public function getHtml(): ?string
    {
        return $this->html;
    }
}
