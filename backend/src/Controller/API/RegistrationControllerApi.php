<?php

namespace App\Controller\API;

use App\Entity\Inscription;
use App\Entity\LienPersonTypeSession;
use App\Entity\Person;
use App\Entity\Session;
use App\Entity\TypeSession;
use App\Form\RegistrationFormType;
use DateTime;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 *@Route("/api")
 */
class RegistrationControllerApi extends AbstractController
{
    /**
     * @Route("/register", name="api_user_registration", methods={"PUT","OPTIONS"})
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return Response
     * @throws Exception
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {

        $user = new Person();
        $data = json_decode($request->getContent(), true);
        $entityManager = $this->getDoctrine()->getManager();

        $password = $data['password'];
        $passwordConfirmation = $data['passwordConfirmation'];
        $errors = [];
        if($password != $passwordConfirmation)
        {
            $errors[] = "Le mot de passe et le mot de passe de confirmation ne correspondent pas.";
        }
        if(strlen($password) < 6)
        {
            $errors[] = "Le mot de passe doit être de minimum 6 caractères.";
        }
        if(!$errors)
        {
            $encodedPassword = $passwordEncoder->encodePassword($user, $data['password']);
            $user->setEmail($data['email']);
            $user->setUsername($data['username']);
            $user->setFirstName($data['Nom']);
            $user->setLastName($data['Prenom']);
            $user->setAbonnement($data['Abonnement']);
            $user->setAboType($data['Abonnement']);
            $user->setPassword($encodedPassword);


            try
            {
                $entityManager->persist($user);
                $entityManager->flush();

                /**
                 * @var TypeSession $typeSession
                 * @var Person $user
                 */
                $user = $entityManager
                    ->getRepository('App:Person')
                    ->getPersonFromUsername($data['username']);

                $IdTypeSessions[] = [];
                for ($i = 0; $i < count($data["typeSessions"]); $i++){
                    array_push($IdTypeSessions,$data["typeSessions"][$i]["Id"]);
                    $ltp =  new LienPersonTypeSession();

                    $typeSession = $entityManager->getRepository('App:TypeSession')
                        ->find($data["typeSessions"][$i]["Id"]);

                    $ltp->setIdTypeSession($typeSession);
                    $ltp->setIdPerson($user);

                    $this->autoSub($IdTypeSessions,$user);

                    $entityManager->persist($ltp);
                    $entityManager->flush();

                }


                $entityManager->persist($user);
                $entityManager->flush();

                return new JsonResponse(['result' => true,'user' => $user]);
            }
            catch(UniqueConstraintViolationException $e)
            {
                $errors[] = "Cette email ou nom d'utilisateur est déjà utilisé!";
            }
//            catch(Exception $e)
//            {
//                $errors[] = "Impossible de s'enregistrer actuellement!";
//            }
        }
        return new JsonResponse(['errors' => $errors], 400);
    }

    /**
     * @Route("/TypeSession/", name="api_Type_Session", methods={"OPTIONS","GET"})
     * @return Response
     * @throws Exception
     */
    public function getTypeSession(){
        $em = $this->getDoctrine()->getManager();
        $listSession = $em
            ->getRepository('App:TypeSession')
            ->findAll();

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idInscription','Sessions','abonnement','day',
                'password','roles','role','email','aboType', 'idSession',
                'plainpassword','plainPassword','IdTypeSession',
                'username','salt','__cloner__','__initializer__','__isInitialized__'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:i'
        ];

        $encoders = array(new JsonEncode());
        $normalizers = array(new DateTimeNormalizer(),new ObjectNormalizer());
        $serializer = new Serializer($normalizers,$encoders);

        $jsonSessions = $serializer->serialize($listSession, 'json', $defaultContext);
        $Sessions = new JsonResponse();
        $Sessions->setContent($jsonSessions);
        return $Sessions;
    }

    /**
     * @Route("/TypeSession", name="api_Add_Type_Session", methods={"PUT","OPTIONS"})
     * @param Request $request
     * @return Response
     */
    public function setTypeSession(Request $request){
        $typeSession = new TypeSession();
        $data = json_decode($request->getContent(),true);

        $em = $this->getDoctrine()->getManager();
        try{
            $ts = $em->getRepository('App:TypeSession')
                ->findBy([
                    "Day" => $data['Day'],
                    "Time" => new DateTime($data['Time'])
                ]);
            if(empty($ts)){
                $typeSession->setDay($data['Day']);
                $typeSession->setTime(new DateTime($data['Time']));

                $em->persist($typeSession);
                $em->flush();
                return new JsonResponse(['result'=>true],200);
            }else{
                throw new Exception('Le type de session est existant');
            }

        }catch(\Exception $e){
            return new JsonResponse(['error'=>$e->getMessage()],400);
        }

    }

    /**
     * @Route("/TypeSession", name="api_Edit_Type_Session", methods={"POST","OPTIONS"})
     * @param Request $request
     * @return Response
     */
    public function editTypeSession(Request $request){
        $data = json_decode($request->getContent(),true);
        $em = $this->getDoctrine()->getManager();
        try{
            $typeSession = $em->getRepository('App:TypeSession')->find($data['Id']);

            $ts = $em->getRepository('App:TypeSession')
                ->findBy([
                    "Day" => $data['Day'],
                    "Time" => new DateTime($data['Time'])
                ]);

            if(empty($ts)){
                $typeSession->setDay($data['Day']);
                $typeSession->setTime(new DateTime($data['Time']));

                $em->persist($typeSession);
                $em->flush();
                return new JsonResponse(['result'=>true],200);
            }else{
                throw new Exception('Le type de session est existant');
            }
        }catch(\Exception $e){
            return new JsonResponse(['error'=>$e->getMessage()],400);
        }

    }

    /**
     * @Route("/TypeSession/{id?}", name="api_Set_Type_Session", methods={"DELETE","OPTIONS"})
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function DeleteTypeSession(Request $request,$id){

        $em = $this->getDoctrine()->getManager();
        try{
           $typesession = $em->getRepository('App:TypeSession')->find($id);

            $ltp = $typesession->getIdTypeSession();
            for($i = 0;$i < count($ltp);$i++){
                $em->remove($ltp[$i]);
                $em->flush();
            }
            $em->remove($typesession);
            $em->flush();

            return new JsonResponse(['result'=>true],200);
        }catch(\Exception $e){
            return new JsonResponse(['error'=>$e->getMessage()],400);
        }
    }

    public function autoSub($IdTypeSessions,Person $user){
        /**
         * @var $inscription Inscription
         */
        $today = new DateTime();
        $entityManager = $this->getDoctrine()->getManager();

        $Sessions = $entityManager
            ->getRepository('App:Session')
            ->getALlSessionListFromToday($today);

        $lisInscription = $entityManager
            ->getRepository('App:Inscription')
            ->findBy(['Id_Person'=>$user]);

        $listIdSession = [];

        foreach ($lisInscription as $inscription){
            array_push($listIdSession,$inscription->getIdSession()->getId());
        }

        /**
         * @var $session Session
         */
        foreach($Sessions as $session){

            if(in_array($session->getIdTypeSession()->getId(),$IdTypeSessions) &
                !in_array($session->getId(),$listIdSession)){

                if ($session->getBike() >0 & $user->getAbonnement() > 0) {
                    $inscription = new Inscription();

                    $inscription->setIdPerson($user);
                    $inscription->setIdSession($session);

                    $entityManager->persist($inscription);
                    $entityManager->flush();

                    $session->setBike($session->getbike() - 1);
                    $entityManager->persist($session);
                    $entityManager->flush();

                    $user->setAbonnement($user->getAbonnement() - 1);
                }
            }
        }
    }
}
