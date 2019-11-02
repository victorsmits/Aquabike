<?php

namespace App\Controller\API;

use App\Entity\Inscription;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
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
     * @Route("/month/{month?}/{error?}", name="api_month")
     * @param $month
     * @param $error
     * @return Response
     */

    public function index($month,$error)
    {
        if(!empty($month)){
            $m = $month;

        }
        else{
            $m = date('m');
        }
        dump($m);
        $year = date('Y');

        $em = $this->getDoctrine()->getManager();
        $listSession = $em->getRepository('App:Session')->getMonthSessionList($m, $year);

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idInscription'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:m'
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
     * @Route("/Inscription/{id}", name="api_Inscription")
     * @param $id
     * @return RedirectResponse
     */
    public function createInscription($id){
        $entityManager = $this->getDoctrine()->getManager();

        $user = $entityManager
            ->getRepository('App:Person')
            ->getPersonFromUsername($this->getUser()->getUsername());

        $session = $entityManager
            ->getRepository('App:Session')
            ->getSessionFromId($id);


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

            return $this->redirectToRoute('month',[
                'month' => date_format($session->getDate(), 'm'),
            ],307);
        }else{
            return $this->redirectToRoute('month', [
                'error' => "Session complete ou plus d'abonnement disponible"
            ]);
        }
    }

    /**
     * @Route("/Desinscription/{id}", name="api_Unsub")
     * @param $id
     * @return RedirectResponse
     */
    public function removeInscription($id){
        $entityManager = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $inscription = $entityManager->getRepository('App:Inscription')->findInscription($id,$user);
        $session = $entityManager->getRepository('App:Session')->getSessionFromId($id);

        if($session->getDate() != date('now')) {
            $entityManager->remove($inscription);
            $entityManager->flush();

            $session->setBike($session->getbike() + 1);
            $entityManager->persist($session);
            $entityManager->flush();

            $username = $this->getUser()->getUsername();
            $user = $entityManager->getRepository('App:Person')->getPersonFromUsername($username);
            $user->setAbonnement($user->getAbonnement() + 1);
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('month', array(
                'month' => date_format($session->getDate(), 'm')
            ));
        }else{
            return $this->redirectToRoute('month', [
                'error' => "impossible de se désinscrire de cette session aujourd'hui"
            ]);
        }
    }



}
