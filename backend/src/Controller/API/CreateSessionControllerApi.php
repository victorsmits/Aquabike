<?php

namespace App\Controller\API;

use App\Entity\Session;
use App\Form\SessionType;
use DateTime;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 *@Route("/api")
 */
class CreateSessionControllerApi extends AbstractController
{
    /**
     * @Route("/admin/session", name="api_create_session", methods={"POST"})
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function index(Request $request)
    {
        $session = new Session();
        $data = json_decode($request->getContent(), true);

        $errors = [];
        if(!$errors)
        {
            $session->setDate(new DateTime($data["Date"]));
            $session->setTime(new DateTime($data["Time"]));
            $session->setBike($data["Bike"]);

            try
            {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($session);
                $entityManager->flush();
                return $this->json(['session' => $session]);
            }
            catch(UniqueConstraintViolationException $e)
            {
                $errors = "The email or user provided already has an account!";
            }
            catch(\Exception $e)
            {
                $errors = "Unable to save new user at this time.";
            }
        }

        return new JsonResponse([
            'errors' => $errors
        ], 400);
    }
}
