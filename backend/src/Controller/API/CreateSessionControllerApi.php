<?php

namespace App\Controller\API;

use App\Entity\Session;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Exception;
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
     * @Route("/admin/session", name="api_create_session", methods={"POST","GET"})
     * @param Request $request
     * @return Response
     * @throws Exception
     */
    public function index(Request $request)
    {
        $session = new Session();
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();

        $date = new DateTime($data["Date"]);
        dump($date->format("Y/m/d"));

        $session->setDate(new DateTime($date->format("Y/m/d")));
        $session->setTime(new DateTime($data["Time"]));
        $session->setBike($data["Bike"]);

        dump($session);

        $listSessions = $entityManager
            ->getRepository('App:Session')
            ->findOneBy([
                "Date" => new DateTime($date->format("Y/m/d")),
                "time" => new DateTime($data["Time"])
            ]);

        try
        {
            if(!empty($listSessions)){
                throw new Exception("La session existe déjà");
            }

            $entityManager->persist($session);
            $entityManager->flush();
            return new JsonResponse(['result' => true,'session' => $session], 200);
        }
        catch(Exception $e)
        {
            $error = $e->getMessage();
        }

        return new JsonResponse(['error' => $error], 400);
    }
}
