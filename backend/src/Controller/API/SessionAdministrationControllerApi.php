<?php

namespace App\Controller\API;

use App\Entity\Inscription;
use App\Entity\Person;
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

            if(!empty($listInscription)){
                foreach ($listInscription as $inscription) {
                    $userId = $inscription->getIdPerson();

                    $user = $entityManager
                        ->getRepository('App:Person')
                        ->findOneBy(['id'=>$userId]);

                    $user->setAbonnement( $user->getAbonnement()+1);

                    $entityManager->persist($user);
                    $entityManager->flush();

                    $entityManager->remove($inscription);
                    $entityManager->flush();
                }
            }

            $session->setCancel(true);
            $session->setBike(0);
            $entityManager->persist($session);
            $entityManager->flush();

            return new JsonResponse(['result' => true], 200);
        }
        catch(ORMException $e){
            $error = $e->getMessage();
        }
        catch(Exception $e) {
            $error = $e->getMessage();
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
