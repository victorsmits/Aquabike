<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;

class AbonnementController extends AbstractController
{
    /**
     * @Route("/admin/abonnement", name="abonnement")
     */
    public function index()
    {
        $listPerson = $this->getPersonList();

        return $this->render('abonnement/abonnement.html.twig', [
            'listPerson' => $listPerson,
        ]);
    }

    public function getPersonList(){
        $listPerson = [];

        $em = $this->getDoctrine()->getManager();
        $listAbo = $em->getRepository('App:Person')->findAll();

        foreach ($listAbo as $abo){
            array_push($listPerson, [
                $abo->getlastName(),
                $abo->getFirstName(),
                $abo->getEmail(),
                $abo->getAbonnement(),
                $abo->getId(),
            ]);
        }
        return $listPerson;
    }

    /**
     * @Route("/admin/renew/{id}", name="renew")
     * @param $id
     * @return RedirectResponse
     */
    public function RenewAbo($id){
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository('App:Person')->findOneBy(["id"=>$id]);

        $user->setAbonnement($user->getAboType());
        $em->persist($user);
        $em->flush();

        return $this->redirectToRoute('abonnement');
    }
}
