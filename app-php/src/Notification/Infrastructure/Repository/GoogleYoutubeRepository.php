<?php

namespace App\Notification\Infrastructure\Repository;

use App\Notification\Domain\Repository\YoutubeRepositoryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class GoogleYoutubeRepository implements YoutubeRepositoryInterface
{
    private string $apiUrl = 'https://www.googleapis.com/youtube/v3/search';

    public function __construct(
        private readonly HttpClientInterface $httpClient,
        private readonly string $youtubeApiKey
    ) {}

    public function search(string $query): array
    {
        if (empty($this->youtubeApiKey)) {
            throw new \Exception('YOUTUBE_API_KEY no está configurada.');
        }

        $response = $this->httpClient->request('GET', $this->apiUrl, [
            'query' => [
                'part' => 'snippet',
                'maxResults' => '10',
                'q' => $query,
                'type' => 'video',
                'key' => $this->youtubeApiKey,
            ],
        ]);

        if (200 !== $response->getStatusCode()) {
            throw new \Exception('Error en la API de YouTube: ' . $response->getContent(false));
        }

        $data = $response->toArray();
        $urls = [];

        foreach ($data['items'] as $item) {
            $urls[] = "https://www.youtube.com/watch?v={$item['id']['videoId']}";
        }

        return $urls;
    }
}
