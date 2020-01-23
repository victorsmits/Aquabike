<?php

namespace App\Controller\API;
use App\Entity\LienPersonTypeSession;
use App\Entity\Person;
use App\Entity\TypeSession;
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
     * @Route("/profile/{username}", name="api_profile", methods={"OPTIONS","GET"})
     * @param Request $request
     * @param $username
     * @return JsonResponse
     */
    public function index(Request $request,$username)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(),true);

        if(filter_var($username, FILTER_VALIDATE_EMAIL)){
            $userInfo = $entityManager
                ->getRepository('App:Person')
                ->getPersonFromEmail($username);
        }else{
            $userInfo = $entityManager
                ->getRepository('App:Person')
                ->getPersonFromUsername($username);
        }

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT => 0,
            AbstractNormalizer::IGNORED_ATTRIBUTES =>['Password','plainPassword','idTypeSession',
                'sessions','idInscription'=> ['idInscription'],'__cloner__','__isInitialized__','__initializer__'],
            AbstractNormalizer::ATTRIBUTES => ["id",
                "LastName",
                "FirstName",
                "Abonnement",
                "role",
                "roles",
                "Username",
                "AboType",
                "Email",
                'idInscription' => ['id',
                    'idSession'=>['id',
                        'date',
                        'time',
                        'bike',
                        'cancel']
                ],
                'IdTypeSession'=>[
                    'id',
                    'IdTypeSession'=> [
                        'id',
                        'day',
                        'time'
                    ]
                ],
                'payements' => [
                    "id",
                    "startDate",
                    "endDate",
                    "Amount",
                    "Type",
                    "Person",
                    "Finish"
                ]
            ],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:i',
            AbstractNormalizer::GROUPS => "Profile"
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
     * @Route("/editProfile", name="api_edit_profile", methods={"PUT"})
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
             * @var TypeSession $typeSession
             * @var TypeSession $type
             */
            $userInfo = $entityManager
                ->getRepository('App:Person')
                ->find($data["id"]);

            $userInfo->setEmail($data["Email"]);
            $userInfo->setFirstName($data["firstName"]);
            $userInfo->setLastName($data["lastName"]);

            if($data["password"] != null){
                $encodedPassword = $passwordEncoder->encodePassword($userInfo, $data['password']);
                $userInfo->setPassword($encodedPassword);
            }
            $ltps = $entityManager
                ->getRepository('App:LienPersonTypeSession')
                ->findby([
                    "IdPerson"=>$userInfo->getId()
                ]);

            foreach ($ltps as $ltp) {
                $entityManager->remove($ltp);
                $entityManager->flush();
            }

            foreach($data["typeSessions"] as $type ){
                $ltp =  new LienPersonTypeSession();

                $typeSession = $entityManager
                    ->getRepository('App:TypeSession')
                    ->find($type["Id"]);

                $ltp->setIdTypeSession($typeSession);
                $ltp->setIdPerson($userInfo);

                $entityManager->persist($ltp);
                $entityManager->flush();
            }

            $entityManager->persist($userInfo);
            $entityManager->flush();
            return new JsonResponse(["result"=> true], 200);

        }catch (\Exception $e){
            return new JsonResponse(["error"=> $e->getMessage()], 400);
        }

    }

    /**
     * @Route("/profile/inscription/{user}", name="api_edit_profile", methods={"GET","OPTIONS"})
     * @param $user
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return JsonResponse
     */
    public function getInscritpion($user){
        try{
            $entityManager = $this->getDoctrine()->getManager();

            /**
             * @var $userInfo Person
             * @var TypeSession $typeSession
             * @var TypeSession $type
             */
            $userInfo = $entityManager
                ->getRepository('App:Person')
                ->getPersonFromUsername($user);

            $inscritpion = $entityManager
                ->getRepository('App:Inscription')
                ->findBy(["Id_Person"=>$userInfo->getId()]);

            $defaultContext = [
                AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                    return $object->getId();
                },
                ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
                AbstractNormalizer::IGNORED_ATTRIBUTES =>['__initializer__','idTypeSession','idInscription',
                    'idPerson','__cloner__','__isInitialized__'],
                ObjectNormalizer::ENABLE_MAX_DEPTH => true,
                DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:i'
            ];

            $encoders = array(new JsonEncode());
            $normalizers = array(new DateTimeNormalizer(),new ObjectNormalizer());
            $serializer = new Serializer($normalizers,$encoders);

            $jsonUser = $serializer->serialize($inscritpion, 'json', $defaultContext);
            $Inscritpion = new JsonResponse();
            $Inscritpion->setContent($jsonUser);

            return $Inscritpion;

        }catch (\Exception $e){
            return new JsonResponse(["error"=> $e->getMessage()], 400);
        }

    }
}
