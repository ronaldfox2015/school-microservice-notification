<?php

namespace App\Notification\Application\Service;

use App\Notification\Domain\Model\Mail;
use App\Notification\Domain\Repository\MailRepositoryInterface;
use App\Dto\MailOptionsDto;
use Psr\Log\LoggerInterface;

class MailSendService
{
    public function __construct(
        private readonly MailRepositoryInterface $mailRepository,
        private readonly YoutubeSearchService $youtubeSearchService,
        private readonly LoggerInterface $logger
    ) {}

    public function execute(MailOptionsDto $input): void
    {
        $from = 'ronaldfox2015@gmail.com';
        $to = $input->to;
        $subject = $input->subject;
        $text = 'Recomendaciones de estudio';

        // Generar recomendaciones de YouTube basadas en los temas en input->data
        $youtubeSection = '';
        if (!empty($input->data)) {
            $themes = array_filter(array_map(function ($item) {
                if (is_array($item)) {
                    return $item['theme'] ?? $item['tema'] ?? null;
                }
                return (string) $item;
            }, $input->data));

            if (!empty($themes)) {
                $youtubeSection = '<h3>Videos recomendados para reforzar tus temas:</h3><ul>';
                foreach ($themes as $theme) {
                    try {
                        $urls = $this->youtubeSearchService->execute($theme);
                        if (!empty($urls)) {
                            $youtubeSection .= "<li><strong>$theme:</strong><br>";
                            foreach (array_slice($urls, 0, 2) as $url) {
                                $youtubeSection .= "<a href=\"$url\">$url</a><br>";
                            }
                            $youtubeSection .= '</li>';
                        }
                    } catch (\Throwable $e) {
                        $this->logger->error("Error buscando videos para $theme: " . $e->getMessage());
                    }
                }
                $youtubeSection .= '</ul>';
            }
        }

        $html = sprintf(
            '<div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Hola,</h2>
                <p>Aquí tienes algunas recomendaciones de videos para reforzar tus estudios:</p>
                %s
                <p>¡Mucho éxito en tu aprendizaje!</p>
            </div>',
            $youtubeSection
        );

        $mail = new Mail($from, $to, $subject, $text, $html);

        $this->mailRepository->send($mail);
    }
}
