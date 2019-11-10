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
 *@Route("/api")
 */
class ProfileControllerApi extends AbstractController
{
    /**
     * @Route("/profile/{user}", name="api_profile")
     * @param $user
     * @return JsonResponse
     */
    public function index($user)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $userInfo = $entityManager
            ->getRepository('App:Person')
            ->getPersonFromUsername($user);

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
//            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idSession'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:m'
        ];

        $encoders = array(new JsonEncode());
        $normalizers = array(new DateTimeNormalizer(),new ObjectNormalizer());
        $serializer = new Serializer($normalizers,$encoders);

        $jsonUser = $serializer->serialize($userInfo, 'json', $defaultContext);
        $Profile = new JsonResponse();
        $Profile->setContent($jsonUser);

        return $Profile;
    }

    /**
     * @Route("/ProfileUnsub/{id}", name="api_ProfileUnsub")
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


}
