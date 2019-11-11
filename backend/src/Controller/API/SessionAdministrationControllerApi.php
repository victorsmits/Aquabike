<?php

namespace App\Controller\API;

use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 *@Route("/api/admin")
 */
class SessionAdministrationControllerApi extends AbstractController
{
    /**
     * @Route("/month/{month?}", name="api_session_administration")
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
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:m'
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
     * @Route("/recreate/{id}", name="api_recreate")
     * @param $id
     * @return RedirectResponse
     */
    public function recreateSession($id){
        $entityManager = $this->getDoctrine()->getManager();
        $session = $entityManager->getRepository('App:Session')->find($id);
        $session->setCancel(false);
        $session->setBike(9);
        $entityManager->persist($session);
        $entityManager->flush();

        return $this->redirectToRoute('session_administration',[
            'month' => date_format($session->getDate(), 'm')
        ]);
    }

    //todo email config
    /**
     * @Route("/Cancel/{id}", name="api_Cancel")
     * @param $id
     * @return RedirectResponse
     */
    public function cancelSession($id, \Swift_Mailer $mailer){
        $listInscription = $this->findInscription($id);
        $entityManager = $this->getDoctrine()->getManager();
        $session = $entityManager
            ->getRepository('App:Session')
            ->findOneBy(['id'=>$id]);

        if(!empty($listInscription)){
            foreach ($listInscription as $inscription) {
                $userId = $inscription->getIdPerson();
                $user = $entityManager
                    ->getRepository('App:Person')
                    ->findOneBy(['id'=>$userId]);

//                $message = (new \Swift_Message('Hello Email'))
//                    ->setFrom('send@example.com')
//                    ->setTo($user->getEmail())
//                    ->setBody(
//                        $this->renderView(
//                        // templates/emails/registration.html.twig
//                            'emails/email.html.twig',
//                            ['name' => $user,
//                                'session'=>$session]
//                        ),
//                        'text/html'
//                    )
//                ;
//
//                $mailer->send($message);

                $entityManager->remove($inscription);
                $entityManager->flush();
            }
        }

        $session->setCancel(true);
        $session->setBike(0);
        $entityManager->persist($session);
        $entityManager->flush();

        return $this->redirectToRoute('session_administration',[
            'month' => date_format($session->getDate(), 'm')
        ]);
    }

    /**
     * @Route("/Delete/{id}", name="api_Delete")
     * @param $id
     * @return RedirectResponse
     */
    public function deleteSession($id){

        $entityManager = $this->getDoctrine()->getManager();
        $session = $entityManager->getRepository('App:Session')->find($id);
        $date = $session->getDate();
        $entityManager->remove($session);
        $entityManager->flush();

        return $this->redirectToRoute('session_administration',[
            'month' => date_format($date, 'm')
        ]);
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
