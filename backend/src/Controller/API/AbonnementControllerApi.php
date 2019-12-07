<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
*@Route("/api/admin", methods={"POST","OPTIONS","GET"})
 */
class AbonnementControllerApi extends AbstractController
{
    /**
     * @Route("/abonnement", name="api_abonnement", methods={"GET ","HEAD"})
     */
    public function index()
    {
        $em = $this->getDoctrine()->getManager();
        $listAbo = $em->getRepository('App:Person')->findAll();

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context){
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idInscription',
                'plainPassword','Password','salt'],
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
     * @Route("/renewAbo", name="api_renew", methods={"POST","HEAD","OPTIONS","GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function RenewAbo(Request $request){
        try{
            $em = $this->getDoctrine()->getManager();
            $data = json_decode($request->getContent(), true);
            $user = $em
                ->getRepository('App:Person')
                ->find($data["Id"]);

            $user->setAbonnement($user->getAboType());
            $em->persist($user);
            $em->flush();

            return new JsonResponse(['result'=>true]);

        }catch (\Exception $e){
            $error = $e;
        }
        return new JsonResponse(['error'=>$error]);
    }

    /**
     * @Route("/editAbo", name="api_editAbo", methods={"POST","HEAD"})
     * @param Request $request
     * @return JsonResponse
     */
    public function editAbo(Request $request){
        try{
            $em = $this->getDoctrine()->getManager();
            $data = json_decode($request->getContent(), true);
            $user = $em
                ->getRepository('App:Person')
                ->find($data["Id"]);

            $user->setAboType($data["aboType"]);
            $em->persist($user);
            $em->flush();

            return new JsonResponse(['result'=>true]);

        }catch (\Exception $e){
            $error = $e;
        }
        return new JsonResponse(['error'=>$error]);
    }
}
