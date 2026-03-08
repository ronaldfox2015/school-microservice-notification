<?php

namespace App\Notification\Domain\Repository;

interface YoutubeRepositoryInterface
{
    /**
     * @return string[]
     */
    public function search(string $query): array;
}
