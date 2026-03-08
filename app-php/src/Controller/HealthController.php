<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HealthController extends AbstractController
{
    #[Route('/v1/notification/health', name: 'app_notification_health', methods: ['GET'])]
    public function health(): JsonResponse
    {
        return $this->json([
            'message' => 'Ok',
            'data' => [],
            'code' => 1000
        ]);
    }
}
