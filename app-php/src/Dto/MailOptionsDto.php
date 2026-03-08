<?php

namespace App\Dto;

class MailOptionsDto
{
    public function __construct(
        public string $to,
        public string $subject,
        public string $templateName,
        public array $data = []
    ) {}
}
