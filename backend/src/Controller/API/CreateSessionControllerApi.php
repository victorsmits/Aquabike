<?php

namespace App\Controller\API;

use App\Entity\Session;
use App\Entity\TypeSession;
use DateTime;
use Doctrine\DBAL\Driver\PDOException;
use Doctrine\ORM\ORMException;
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
     * @Route("/admin/session", name="api_create_session", methods={"PUT","OPTIONS"})
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

        try
        {
            if($this->checkIfExist($session)){
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
     * @Route("/admin/autocreate", name="api_auto_create_session", methods={"PUT","OPTIONS"})
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function createSession(Request $request){
        $data = json_decode($request->getContent(), true);
        $year = $data["year"];
        $entityManager = $this->getDoctrine()->getManager();

        $date = new DateTime();
        $end = new DateTime();
        date_add($end, date_interval_create_from_date_string($year . "years"));

        try
        {
            $typeSession = $entityManager
                ->getRepository('App:TypeSession')
                ->findby(['id'=>$data["idTypeSession"]]);

            if(empty($typeSession)){
                throw new Exception('Aucun type de session à été trouvé');
            }

            while ($date < $end){
                if ($date->format('m') != "7" && $date->format('m') != "8" ){
                    /**
                     * @var $type TypeSession
                     * @var $session Session
                     */
                    foreach($typeSession as $type){
                        if($type->getDay() == $date->format("D") ){
                            $session = new Session();

                            $session->setDate(new DateTime($date->format("Y/m/d")));
                            $session->setTime($type->getTime());
                            $session->setBike($data["bike"]);
                            $session->setIdTypeSession($type);

                            if($this->checkIfExist($session)){
                                $entityManager->persist($session);
                                $entityManager->flush();
                            }else{
                                throw new Exception('Session already exist');
                            }

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

    public function checkIfExist(Session $session){
        $entityManager = $this->getDoctrine()->getManager();

        $listSessions = $entityManager
            ->getRepository('App:Session')
            ->findOneBy([
                "Date" => $session->getDate(),
                "time" => $session->getTime()
            ]);

        if(!empty($listSessions)){
            return false;
        }
        else{
            return true;
        }
    }
}
