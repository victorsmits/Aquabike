<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
*@Route("/api/admin")
 */
class AbonnementControllerApi extends AbstractController
{
    /**
     * @Route("/abonnement", name="api_abonnement", methods={"GET","HEAD"})
     */
    public function index()
    {
        $em = $this->getDoctrine()->getManager();
        $listAbo = $em->getRepository('App:Person')->findAll();

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

        $jsonSessions = $serializer->serialize($listAbo, 'json',$defaultContext);
        $Sessions = new JsonResponse();
        $Sessions->setContent($jsonSessions);
        return $Sessions;
    }


    /**
     * @Route("/renew/{id}", name="api_renew", methods={"GET","HEAD"})
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
