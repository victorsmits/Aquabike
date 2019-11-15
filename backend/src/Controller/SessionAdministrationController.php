<?php

namespace App\Controller;

use App\Entity\Person;
use App\Entity\Session;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class SessionAdministrationController extends AbstractController
{
    /**
     * @Route("/admin/month", name="session_administration")
     * @return Response
     */
    public function index()
    {
        if(isset($_GET['month'])){
            $m = $_GET['month'];
        }
        else{
            $m = date('m');
        }
        $listSession = $this->showMonthSession($m);

        return $this->render('session_administration/SessionAdmin.html.twig', [
            'listSession' => $listSession,
            'Selected'=>$m,
        ]);
    }

    /**
     * @Route("/admin/recreate", name="recreate", methods={"POST"})
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
     * @Route("/admin/Cancel/{id}", name="Cancel")
     * @param $id
     * @return RedirectResponse
     */
    public function cancelSession($id, \Swift_Mailer $mailer){
        $entityManager = $this->getDoctrine()->getManager();

        $listInscription = $entityManager
            ->getRepository('App:Inscription')
            ->getInscriptionFromSessionId($id);

        $session = $entityManager
            ->getRepository('App:Session')
            ->getSessionFromId($id);

        if(!empty($listInscription)){
            foreach ($listInscription as $inscription) {
                $userId = $inscription->getIdPerson();
                $user = $entityManager
                    ->getRepository('App:Person')
                    ->getPersonFromId($userId);

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
     * @Route("/admin/Delete/{id}", name="Delete")
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

    public function showMonthSession($month){
        $date = [];
        $year = date('Y');
        $em = $this->getDoctrine()->getManager();

        $listSession = $em->getRepository('App:Session')->getMonthSessionList($month, $year);

        /**
         * @var $Session Session
         */
        foreach ($listSession as $Session){
            array_push($date,array(
                date_format($Session->getDate(), 'D'),
                date_format($Session->getDate(), 'd/M/y'),
                date_format($Session->getTime(), 'H:m'),
                $Session->getBike(),
                $Session->getId(),
                $Session->getCancel()
            ));
        }
        return $date;
    }

}
