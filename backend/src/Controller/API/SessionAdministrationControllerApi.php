<?php

namespace App\Controller\API;

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
     * @Route("/month/{month?}", name="api_session_administration", methods={"POST","OPTIONS","GET"})
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

        $listSession = $this->getSessionList($m,$year);

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
     * @Route("/recreate", name="api_recreate", methods={"POST","OPTIONS","GET"})
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
     * @Route("/Cancel", name="api_Cancel", methods={"POST","OPTIONS","GET"})
     * @param Request $request
     * @param Swift_Mailer $mailer
     * @return JsonResponse
     */
    public function cancelSession(Request $request, Swift_Mailer $mailer){
        $error = [];
        $data = json_decode($request->getContent(), true);

        try{
            $listInscription = $this->findInscription($data["Id"]);

            $entityManager = $this->getDoctrine()->getManager();

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
     * @Route("/Delete", name="api_Delete", methods={"POST","OPTIONS","GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteSession(Request $request){
        $errors = [];
        try{
            $data = json_decode($request->getContent(), true);

            $entityManager = $this->getDoctrine()->getManager();
            $session = $entityManager->getRepository('App:Session')->find($data["Id"]);
            $entityManager->remove($session);
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

    public function findInscription($Id_session){
        $inscription = $this->getDoctrine()
            ->getRepository('App:Inscription')
            ->findBy(array('Id_Session' => $Id_session));
        return $inscription;
    }

    public function getSessionList($month, $year){
        $em = $this->getDoctrine()->getManager();
        // Create two times at the start of this month and next month
        $startDate = DateTime::createFromFormat('d-n-Y', "01-".$month."-".$year);
        $startDate->setTime(0, 0 ,0);

        $endDate = DateTime::createFromFormat('d-n-Y', "01-".($month+1)."-".$year);
        $endDate->setTime(0, 0, 0);

        $notes = $em
            ->getRepository('App:Session')
            ->createQueryBuilder('n')
            ->where('n.Date BETWEEN :start AND :end')
            ->setParameter('start', $startDate)
            ->setParameter('end', $endDate)
            ->getQuery()
            ->getResult();

        return $notes;
    }


}
