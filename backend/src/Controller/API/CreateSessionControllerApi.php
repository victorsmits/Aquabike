<?php

namespace App\Controller\API;

use App\Entity\Session;
use App\Entity\TypeSession;
use DateTime;
use Doctrine\DBAL\Driver\PDOException;
use Doctrine\ORM\ORMException;
use Swift_Mailer;
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
     * @Route("/admin/session", name="api_create_session", methods={"POST","OPTIONS"})
     * @param Request $request
     * @return Response
     * @throws Exception
     */
    public function index(Request $request,Swift_Mailer $mailer)
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
            if(!$this->checkIfExist($session)){
                throw new Exception("La session existe déjà");
            }

            $entityManager->persist($session);
            $entityManager->flush();

            $listPerso = $entityManager->getRepository('App:Person')->findAll();

            foreach ($listPerso as $perso){
                $info = [$perso->getFirstName(),
                    $perso->getLastName(),
                    $session->getDate()->format('Y/m/d'),
                    $session->getTime()->format('H:i')];

                $message = (new \Swift_Message('Scéance de rattrapage le '. $session->getDate()->format('Y/m/d') . " " .$session->getTime()->format('H:i')))
                    ->setFrom('noreply@aquabikegenval.be')
                    ->setTo($perso->getEmail())
                    ->setBody(
                        "<h1>Scéance de rattrapage !</h1>

Bonjour ". $info[1]." ". $info[0].", une session de rattrapage le ".$info[2]." à ".$info[3]." a été ajouté!

Rendez-vous sur <a href=\"http://www.aquabikegenval.be/month\">http://www.aquabikegenval.be/month</a> pour vous inscrire à une nouvelle session .

Merci!",
                        'text/html'
                    );
                $mailer->send($message);
            }

            return new JsonResponse(['result' => true,'session' => $session], 200);
        }
        catch(Exception $e)
        {
            $error = $e->getMessage();
        }

        return new JsonResponse(['error' => $error], 400);
    }

    /**
     * @Route("/admin/autocreate", name="api_auto_create_session", methods={"POST","OPTIONS"})
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function createSession(Request $request){
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();

        $avoid_month = ["1","7","8"];

        $today = new DateTime();

        if(in_array($today->format('m'),$avoid_month)){
            $year = $data["year"] + 1;
        }else{
            $year = $data["year"];
        }

        $date = new DateTime();
        $end = new DateTime();
        date_add($end, date_interval_create_from_date_string($year . "months"));

        try
        {
            $typeSession = $entityManager
                ->getRepository('App:TypeSession')
                ->findby(['id'=>$data["idTypeSession"]]);

            if(empty($typeSession)){
                throw new Exception('Aucun type de session à été trouvé');
            }


            while ($date < $end){
                if (!in_array($date->format('m'),$avoid_month)) {
                    /**
                     * @var $type TypeSession
                     * @var $session Session
                     */
                    foreach ($typeSession as $type) {
                        if ($type->getDay() == $date->format("D")) {
                            $session = new Session();

                            $session->setDate(new DateTime($date->format("Y/m/d")));
                            $session->setTime($type->getTime());
                            $session->setBike($data["bike"]);
                            $session->setIdTypeSession($type);

                            if ($this->checkIfExist($session)) {
                                $entityManager->persist($session);
                                $entityManager->flush();
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
