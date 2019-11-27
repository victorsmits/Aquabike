<?php

namespace App\Controller\API;
use App\Entity\Person;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use DateTime;
/**
 *@Route("/api")
 */
class ProfileControllerApi extends AbstractController
{
    /**
     * @Route("/profile/", name="api_profile", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(),true);

        $userInfo = $entityManager
            ->getRepository('App:Person')
            ->getPersonFromUsername($data["Username"]);

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
//            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idSession'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:i'
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
     * @Route("/editProfile", name="api_edit_profile", methods={"POST"})
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return JsonResponse
     */
    public function editProfile(Request $request, UserPasswordEncoderInterface $passwordEncoder){
        try{
            $entityManager = $this->getDoctrine()->getManager();

            $data = json_decode($request->getContent(),true);

            /**
             * @var $userInfo Person
             */
            $userInfo = $entityManager
                ->getRepository('App:Person')
                ->find($data["id"]);

            $userInfo->setEmail($data["Email"]);
            $userInfo->setFirstName($data["firstName"]);
            $userInfo->setLastName($data["lastName"]);
            $userInfo->setDay($data['Day']);
            $userInfo->setTime(new DateTime($data["Time"]));
            $userInfo->setDay2($data['Day2']);
            $userInfo->setTime2(new DateTime($data["Time2"]));

            if($data["password"] != null){
                $encodedPassword = $passwordEncoder->encodePassword($userInfo, $data['password']);
                $userInfo->setLastName($encodedPassword);
            }

            $entityManager->persist($userInfo);
            $entityManager->flush();
            return new JsonResponse(["result"=> true], 200);

        }catch (\Exception $e){
            return new JsonResponse(["error"=> $e->getMessage()], 400);
        }

    }


}
