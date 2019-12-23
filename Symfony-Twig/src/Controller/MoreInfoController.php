<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MoreInfoController extends AbstractController
{
    /**
     * @Route("/moreinfo/{id}", name="more_info")
     * @param $id
     * @return Response
     */
    public function index($id)
    {
        $em = $this->getDoctrine()->getManager();

        $listInscription=$em->getRepository('App:Inscription')->getInscriptionFromSessionId($id);
        $listPerson = [];

        $listSessionInfo = $this->getSessionInfo($id);

        foreach ($listInscription as $Inscription){
            $idPerson = $Inscription->getIdPerson();
            $Person = $em->getRepository('App:Person')->getPersonFromId($idPerson);
            array_push($listPerson, array($Person->getlastName(), $Person->getFirstName()));
        }

        return $this->render('more_info/moreinfo.html.twig', [
            'listPerson' => $listPerson,
            'listSessionInfo' => $listSessionInfo,
        ]);
    }

    public function getSessionInfo($idSession){
        $em = $this->getDoctrine()->getManager();
        $session = $em->getRepository('App:Session')->getSessionFromId($idSession);

        return [
            date_format($session->getDate(), 'd/M/y'),
            date_format($session->getTime(), 'H:m'),
            $session->getBike(),
        ];
    }
}
