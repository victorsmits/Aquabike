<?php

namespace App\Controller;

use App\Entity\Inscription;
use App\Entity\Session;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MonthController extends AbstractController
{
    /**
     * @Route("/month/{error?}", name="month")
     * @param $error
     * @return Response
     */

    public function index($error)
    {
        if(isset($_GET['month'])){
            $m = $_GET['month'];

        }
        else{
            $m = date('m');
        }
        $listSession = $this->showMonthSession($m);

        return $this->render('month/month.html.twig', [
            'listSession' => $listSession,
            'Selected'=>$m,
            'errormessage'=> $error,
        ]);
    }

    /**
     * @Route("/Inscription/{id}", name="Inscription")
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
     * @Route("/Desinscription/{id}", name="Unsub")
     * @param $id
     * @return RedirectResponse
     */
    public function removeInscription($id){
        $entityManager = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $inscription = $entityManager->getRepository('App:Inscription')->findInscription($id,$user);
        $session = $entityManager->getRepository('App:Session')->getSessionFromId($id);

        if($session->getDate() != date('now')) {
            $entityManager = $this->getDoctrine()->getManager();
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

    public function showMonthSession($month){
        $date = [];
        $year = date('Y');
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $listSession = $em->getRepository('App:Session')->getMonthSessionList($month, $year);

        foreach ($listSession as $Session){
            /**
             * @var $Session Session
             */
            array_push($date,array(
                $em->getRepository('App:Inscription')->checkIfInscription($Session->getId(),$user),
                date_format($Session->getDate(), 'D'),
                date_format($Session->getDate(), 'd/M/y'),
                date_format($Session->getTime(), 'H:m'),
                $Session->getBike(),
                $Session->getId(),
                $Session->getCancel(),
            ));
        }
        return $date;
    }



}
