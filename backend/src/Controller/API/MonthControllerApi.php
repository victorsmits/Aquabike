<?php

namespace App\Controller\API;

use App\Entity\Inscription;
use App\Entity\Person;
use App\Entity\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 *@Route("/api")
 */
class MonthControllerApi extends AbstractController
{
    /**
     * @Route("/month/{month?}/{year?}/{error?}", name="api_month", methods={"POST"})
     * @param Request $request
     * @return Response
     */

    public function index(Request $request)
    {
        $data = json_decode($request->getContent(),true);
        $month = $data["month"];
        $year = $data["year"];

        $em = $this->getDoctrine()->getManager();
        $listSession = $em
            ->getRepository('App:Session')
            ->getMonthSessionList($month, $year);

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
            AbstractNormalizer::IGNORED_ATTRIBUTES =>['abonnement','day',
                'password','roles','role','email','aboType', 'idSession',
                'plainpassword','plainPassword','IdTypeSession',
                'username','salt','__cloner__','__initializer__','__isInitialized__'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:i'
        ];

        $encoders = array(new JsonEncode());
        $normalizers = array(new DateTimeNormalizer(),new ObjectNormalizer());
        $serializer = new Serializer($normalizers,$encoders);

        $jsonSessions = $serializer->serialize($listSession, 'json', $defaultContext);
        $Sessions = new JsonResponse();
        $Sessions->setContent($jsonSessions);
        return $Sessions;

    }

    /**
     * @Route("/Inscription", name="api_Inscription", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createInscription(Request $request){
        $entityManager = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        $errors = [];

        /**
         * @var $user Person
         * @var $session Session
         */

        try{
            $user = $entityManager
                ->getRepository('App:Person')
                ->getPersonFromUsername($data["Username"]);

            $session = $entityManager
                ->getRepository('App:Session')
                ->getSessionFromId($data["Id"]);


            if ($session->getBike() >0 & $user->getAbonnement() > 0) {
                $inscription = new Inscription();

                $inscription->setIdPerson($user);
                $inscription->setIdSession($session);

                $entityManager->persist($inscription);
                $entityManager->flush();

                $session->setBike( $session->getbike()-1);
                $entityManager->persist($session);
                $entityManager->flush();

                $user->setAbonnement( $user->getAbonnement()-1);
                $entityManager->persist($user);
                $entityManager->flush();

                return new JsonResponse(['result' => true,'user' => $user]);
            }
        }catch (\Exception $e){
            $errors = $e;
        }

        return new JsonResponse([
            'errors' => $errors
        ], 400);
    }

    /**
     * @Route("/Desinscription", name="api_Unsub", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function removeInscription(Request $request){
        $entityManager = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        $errors = [];

        /**
         * @var $user Person
         * @var $session Session
         */

        try{
            $user = $entityManager
                ->getRepository('App:Person')
                ->getPersonFromUsername($data["Username"]);

            $session = $entityManager
                ->getRepository('App:Session')
                ->getSessionFromId($data["Id"]);

            $inscription = $entityManager
                ->getRepository('App:Inscription')
                ->findInscription($session,$user);

            if($session->getDate() != date('now')) {
                $entityManager->remove($inscription);
                $entityManager->flush();

                $session->setBike($session->getbike() + 1);
                $entityManager->persist($session);
                $entityManager->flush();

                $user->setAbonnement($user->getAbonnement() + 1);
                $entityManager->persist($user);
                $entityManager->flush();

                return new JsonResponse(['result' => true]);
            }
        }catch (\Exception $e){
            $errors = $e;

        }

        return new JsonResponse([
            'errors' => $errors
        ], 400);
    }



}
