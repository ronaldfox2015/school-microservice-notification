<?php

namespace App\Controller;

use App\Dto\MailOptionsDto;
use App\Notification\Application\Service\MailSendService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MailController extends AbstractController
{
    public function __construct(
        private readonly MailSendService $mailSendService
    ) {}

    #[Route('/mail', name: 'app_mail_send', methods: ['POST'])]
    public function send(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return $this->json([
                'message' => 'Cuerpo de petición inválido.',
                'code' => 400
            ], 400);
        }

        $dto = new MailOptionsDto(
            to: $data['to'] ?? '',
            subject: $data['subject'] ?? '',
            templateName: $data['templateName'] ?? '',
            data: $data['data'] ?? []
        );

        try {
            $this->mailSendService->execute($dto);

            return $this->json([
                'message' => 'Petición exitosa de notification.',
                'data' => [],
                'code' => 1000
            ]);
        } catch (\Throwable $e) {
            return $this->json([
                'message' => 'Error al procesar la notificación: ' . $e->getMessage(),
                'code' => 500
            ], 500);
        }
    }
}
