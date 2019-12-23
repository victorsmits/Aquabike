<?php

namespace App\Controller\API;

use App\Entity\Session;
use App\Form\SessionType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 *@Route("/api")
 */
class CreateSessionControllerApi extends AbstractController
{
    /**
     * @Route("/admin/session", name="api_create_session")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $session = new Session();
        $form = $this->createForm(SessionType::class, $session);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($session);
            $entityManager->flush();
            
        }
        return $this->render('create_session/session.html.twig', [
            'sessionForm' => $form->createView(),
        ]);
    }
}
