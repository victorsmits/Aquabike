<?php

namespace App\Controller\API;

use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 *@Route("/api")
 */
class AdminControllerApi extends AbstractController
{
    //todo create inscription when register
    /**
     * @Route("/admin", name="api_admin")
     */
    public function index()
    {
        return $this->render('admin/admin.html.twig');
    }


}
