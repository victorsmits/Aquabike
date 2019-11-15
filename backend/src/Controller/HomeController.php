<?php

namespace App\Controller;

use App\Entity\Inscription;
use App\Entity\Person;
use App\Entity\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{

    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->showTodayInscription();
    }

    /**
     * @return array
     * @var $Session Session
     * @var $Person Person
     */
    public function getPersonList($Session){
        $em = $this->getDoctrine()->getManager();

        $listInscription=$em->getRepository('App:Inscription')->getInscriptionFromSessionId($Session->getId());
        $listPerson = [];


        foreach ($listInscription as $Inscription){
            $idPerson = $Inscription->getIdPerson();
            $Person = $em->getRepository('App:Person')->getPersonFromId($idPerson);
            array_push($listPerson, array($Person->getlastName(), $Person->getFirstName()));
        }
        return $listPerson;
    }

    public function showTodayInscription(){
        $em = $this->getDoctrine()->getManager();

        $listSession = $em->getRepository('App:Session')->getTodayIdSession();

        if($listSession) {
            $listPersonTop = $this->getPersonList($listSession[0]);

            $Date = date_format($listSession[0]->getDate(), 'd/M/Y');
            $timeTop = date_format($listSession[0]->getTime(), 'H:m');

            if(!empty($listSession[2])) {
                $listPersonBottom = $this->getPersonList($listSession[1]);
                $timeBottom = date_format($listSession[1]->getTime(), 'H:m');
            }else{
                $timeBottom = "No session";
                $listPersonBottom =[];
            }

            return $this->render('home/home.html.twig', [
                'Date' => $Date,
                'TimeTop' => $timeTop,
                'TimeBottom' => $timeBottom,
                'listPersonTop' => $listPersonTop,
                'listPersonBottom' => $listPersonBottom,
            ]);
        }
        return $this->render('home/home.html.twig', [
            'NoSession' => 'true',
        ]);
    }
}

