<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     */
    public function index()
    {
        $listSession = $this->showSession();
        $userInfo = $this->getUserInfo();

        return $this->render('profile/Profile.html.twig', [
            'listSession' => $listSession,
            'userInfo' => $userInfo,
        ]);
    }

    /**
     * @Route("/ProfileUnsub/{id}", name="ProfileUnsub")
     * @param $id
     * @return RedirectResponse
     */
    public function removeInscription($id){
        $entityManager = $this->getDoctrine()->getManager();

        $inscription = $entityManager
            ->getRepository('App:Inscription')
            ->getInscriptionFromSessionId($id);

        $entityManager->remove($inscription);
        $entityManager->flush();
        return $this->redirectToRoute('profile');
    }

    public function getUserInfo(){
        $user = $this->getUser();
        $userInfo = [
          $user->getLastName(),
          $user->getFirstName(),
          $user->getEmail(),
          $user->getAbonnement(),
          $user->getDay(),
        ];

        return $userInfo;
    }

    public function showSession(){
        $listDate = [];
        $em = $this->getDoctrine()->getManager();

        $listInscription = $em
            ->getRepository('App:Inscription')
            ->getInscriptionFromPersonId($this->getUser());

        foreach ($listInscription as $inscription){
            $session = $em->getRepository('App:Session')->getSessionFromId($inscription->getIdSession());

            array_push($listDate,array(
                date_format($session->getDate(), 'D'),
                date_format($session->getDate(), 'd/M/y'),
                date_format($session->getTime(), 'H:m'),
                $session->getBike(),
                $session->getId()
            ));
        }
        return $listDate;
    }
}
