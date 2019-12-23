<?php

namespace App\Controller;

use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    //todo create inscription when register
    /**
     * @Route("/admin", name="admin")
     */
    public function index()
    {
        return $this->render('admin/admin.html.twig');
    }


}
