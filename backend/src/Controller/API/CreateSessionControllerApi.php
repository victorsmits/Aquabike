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

        $session->setDate(new DateTime($date->format("Y/m/d")));
        $session->setTime(new DateTime($data["Time"]));
        $session->setBike($data["Bike"]);

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


    /**
     * @Route("/admin/createsession", name="api_create_session", methods={"POST","GET"})
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function createSession(Request $request){
        $data = json_decode($request->getContent(), true);
        $year = $data["year"];

        $date = new DateTime();
        $end = new DateTime();
        date_add($end, date_interval_create_from_date_string($year . "years"));
        try
        {
            while ($date < $end){
                if ($date->format('m') != "7" && $date->format('m') != "8" ){
                    echo($date->format('D') . "  ");
                    switch ($date->format('D')){
                        case "Mon" : {
                            $this->addSession($date,"19:00",$data["bike"]);
                            $this->addSession($date,"21:10",$data["bike"]);
                            break;
                        }
                        case "Wed" : {
                            $this->addSession($date,"9:00",$data["bike"]);
                            $this->addSession($date,"10:10",$data["bike"]);
                            break;
                        }
                        case "Thu" : {
                            $this->addSession($date,"17:30",$data["bike"]);
                            $this->addSession($date,"18:45",$data["bike"]);
                            $this->addSession($date,"19:50",$data["bike"]);
                            break;
                        }
                    }
                }
                date_add($date, date_interval_create_from_date_string("1 day"));
            }
            return new JsonResponse(['result' => true], 200);
        }catch(Exception $e)
        {
            $error = $e->getMessage();
        }
        return new JsonResponse(['error' => $error], 400);
    }

    private function addSession(DateTime $date, $Time, $bike ){
        $session = new Session();
        $entityManager = $this->getDoctrine()->getManager();

        $session->setDate(new DateTime($date->format("Y/m/d")));
        $session->setTime(new DateTime($Time));
        $session->setBike($bike);

        $entityManager->persist($session);
        $entityManager->flush();
    }
}
