<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 *@Route("/api")
 */
class SecurityControllerApi extends AbstractController
{
    /**
     * @Route("/login", name="api_login", methods={"POST","OPTIONS","GET"})
     */
    public function login()
    {
        return new JsonResponse(['result' => true, 'user' => $this->getUser()], 200);
    }

    /**
     * @Route("/logout", name="api_logout")
     */
    public function logout(){

    }
}
