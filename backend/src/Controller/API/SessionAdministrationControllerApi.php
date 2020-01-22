<?php

namespace App\Controller\API;

use App\Entity\Inscription;
use App\Entity\Person;
use App\Entity\Session;
use DateTime;
use Doctrine\DBAL\DBALException;
use Doctrine\ORM\ORMException;
use Exception;
use Swift_Mailer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 *@Route("/api/admin", methods={"POST","OPTIONS","GET"})
 */
class SessionAdministrationControllerApi extends AbstractController
{
    /**
     * @Route("/month/{month?}", name="api_session_administration", methods={"OPTIONS","GET"})
     * @param $month
     * @return Response
     */
    public function index($month)
    {
        if($month){
            $m = $month;
        }
        else{
            $m = date('m');
        }
        $year = date('Y');

        $em = $this->getDoctrine()->getManager();

        $listSession = $em->getRepository('App:Session')->getMonthSessionList($month, $year);

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
//            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idSession'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:i'
        ];

        $encoders = array(new JsonEncode());
        $normalizers = array(new DateTimeNormalizer(),new ObjectNormalizer());
        $serializer = new Serializer($normalizers,$encoders);

        $jsonSessions = $serializer->serialize($listSession, 'json',$defaultContext);
        $Sessions = new JsonResponse();
        $Sessions->setContent($jsonSessions);
        return $Sessions;

    }

    /**
     * @Route("/recreate", name="api_recreate", methods={"PUT","OPTIONS"})
     * @param Request $request
     * @return JsonResponse
     */
    public function recreateSession(Request $request){
        $errors = [];
        try{
            $entityManager = $this->getDoctrine()->getManager();
            $data = json_decode($request->getContent(), true);

            $session = $entityManager->getRepository('App:Session')->find($data["Id"]);
            $session->setCancel(false);
            $session->setBike($data["Bike"]);
            $entityManager->persist($session);
            $entityManager->flush();

            return new JsonResponse(['result' => true], 200);
        }
        catch (Exception $e){
            $errors = $e;
        }

        return new JsonResponse([
            'errors' => $errors
        ], 400);
    }

    //todo email config

    /**
     * @Route("/Cancel", name="api_Cancel", methods={"PUT","OPTIONS"})
     * @param Request $request
     * @param Swift_Mailer $mailer
     * @return JsonResponse
     */
    public function cancelSession(Request $request, Swift_Mailer $mailer){
        $error = [];
        /**
         * @var $inscription Inscription
         * @var $user Person
         * @var $session Session
         */
        try{
            $data = json_decode($request->getContent(), true);

            $entityManager = $this->getDoctrine()->getManager();

            $listInscription = $entityManager
                ->getRepository('App:Inscription')
                ->getInscriptionFromSessionId($data["Id"]);

            $session = $entityManager
                ->getRepository('App:Session')
                ->find($data["Id"]);

            $send = false;

            if(!empty($listInscription)){
                foreach ($listInscription as $inscription) {
                    $send = true;
                    $userId = $inscription->getIdPerson();

                    $user = $entityManager
                        ->getRepository('App:Person')
                        ->findOneBy(['id'=>$userId]);

                    $user->setAbonnement( $user->getAbonnement()+1);

                    $info = [$user->getFirstName(),
                        $user->getLastName(),
                        $session->getDate()->format('Y/m/d'),
                        $session->getTime()->format('H:i')];

                    $entityManager->persist($user);
                    $entityManager->flush();

                    $entityManager->remove($inscription);
                    $entityManager->flush();

                    $message = (new \Swift_Message('Scéance du '. $session->getDate()->format('Y/m/d') . " " .$session->getTime()->format('H:i') . ' Annulée'))
                    ->setFrom('noreply@aquabikegenval.be')
                    ->setTo($user->getEmail())
                    ->setBody(
                        "<h1>Scéance annulé !</h1>

Bonjour ". $info[1]." ". $info[0].", la session du ".$info[2]." à ".$info[3]." est annulé!

Rendez-vous sur <a href=\"http://www.aquabikegenval.be/month\">http://www.aquabikegenval.be/month</a> pour vous inscrire à une nouvelle session .

Merci!",
                        'text/html'
                    );
                    $mailer->send($message);
                }
            }

            $session->setCancel(true);
            $session->setBike(0);
            $entityManager->persist($session);
            $entityManager->flush();

            return new JsonResponse(['result' => true,"send"=>$send], 200);
        }
        catch(Exception $e) {
            $error =$e->getMessage();
        }
        return new JsonResponse(['error' => $error], 400);
    }

    /**
     * @Route("/session/{id?}", name="api_Delete", methods={"OPTIONS","DELETE"})
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function deleteSession(Request $request,$id){
        $errors = [];
        try{

            $entityManager = $this->getDoctrine()->getManager();
            $session = $entityManager->getRepository('App:Session')->find($id);
            $entityManager->remove($session);
            $entityManager->flush();

            return new JsonResponse(['result' => true], 200);
        }
        catch (Exception $e){
            $errors = $e;
        }

        return new JsonResponse(['error' => $errors], 400);
    }

}
