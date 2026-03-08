<?php

namespace App\Notification\Application\Service;

use App\Notification\Domain\Repository\YoutubeRepositoryInterface;
use Psr\Log\LoggerInterface;

class YoutubeSearchService
{
    public function __construct(
        private readonly YoutubeRepositoryInterface $youtubeRepository,
        private readonly LoggerInterface $logger
    ) {}

    /**
     * @return string[]
     */
    public function execute(string $query): array
    {
        try {
            $this->logger->info("Buscando videos en YouTube para: $query");
            return $this->youtubeRepository->search($query);
        } catch (\Throwable $e) {
            $this->logger->error("Error en YoutubeSearchService: " . $e->getMessage());
            throw $e;
        }
    }
}
