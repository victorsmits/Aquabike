<?php

namespace App\Controller\API;

use App\Entity\Inscription;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 *@Route("/api")
 */
class HomeControllerApi extends AbstractController
{
    //todo fi max depth

    /**
     * @Route("/", name="api_home", methods={"GET"})
     */
    public function index()
    {
        $em = $this->getDoctrine()->getManager();

        $encoders = array(new JsonEncode());

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
//            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idSession'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:m'
        ];

        $normalizers = array(new ObjectNormalizer());

        $serializer = new Serializer($normalizers,$encoders);

        $today = new \DateTime('now');
        $listSession = $em->getRepository('App:Session')->getTodayIdSession();

        $jsonSessions = $serializer->serialize($listSession, 'json', $defaultContext);

        $Sessions = new JsonResponse();
        $Sessions->setContent($jsonSessions);
        return $Sessions;

    }
}

