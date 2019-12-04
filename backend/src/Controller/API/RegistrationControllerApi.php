<?php

namespace App\Controller\API;

use App\Entity\LienPersonTypeSession;
use App\Entity\Person;
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
     * @Route("/register", name="api_user_registration", methods={"POST","OPTIONS","GET"})
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
                for ($i = 0; $i < count($data["typeSessions"]); $i++){
                    $ltp =  new LienPersonTypeSession();
                    echo($i);

                    $typeSession = $entityManager->getRepository('App:TypeSession')
                        ->find($data["typeSessions"][$i]["Id"]);

                    $ltp->setIdTypeSession($typeSession);
                    $ltp->setIdPerson($user);

                    $entityManager->persist($ltp);
                    $entityManager->flush();
                }

                return new JsonResponse(['result' => true,'user' => $user]);
            }
            catch(UniqueConstraintViolationException $e)
            {
                $errors[] = "Cette email ou nom d'utilisateur est déjà utilisé!";
            }
            catch(Exception $e)
            {
                $errors[] = "Impossible de s'enregistrer actuellement!";
            }
        }
        return new JsonResponse(['errors' => $errors], 400);
    }

    /**
     * @Route("/TypeSession/get", name="api_Type_Session", methods={"POST","OPTIONS","GET"})
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
            AbstractNormalizer::IGNORED_ATTRIBUTES =>['IdTypeSession'],
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
     * @Route("/TypeSession/add", name="api_Add_Type_Session", methods={"POST","OPTIONS","GET"})
     * @param Request $request
     * @return Response
     */
    public function setTypeSession(Request $request){
        $typeSession = new TypeSession();
        $data = json_decode($request->getContent(),true);

        $em = $this->getDoctrine()->getManager();
        try{
            $typeSession->setDay($data['Day']);
            $typeSession->setTime(new DateTime($data['Time']));

            $em->persist($typeSession);
            $em->flush();

            return new JsonResponse(['result'=>true]);
        }catch(\Exception $e){
            return new JsonResponse(['error'=>$e->getMessage()]);
        }

    }

    /**
     * @Route("/TypeSession/edit", name="api_Edit_Type_Session", methods={"POST","OPTIONS","GET"})
     * @param Request $request
     * @return Response
     */
    public function editTypeSession(Request $request){
        $data = json_decode($request->getContent(),true);

        $em = $this->getDoctrine()->getManager();
        try{
            $typeSession = $em->getRepository('App:TypeSession')->find($data['id']);

            $typeSession->setDay($data['day']);
            $typeSession->setTime(new DateTime($data['time']));

            $em->persist($typeSession);
            $em->flush();

            return new JsonResponse(['result'=>true]);
        }catch(\Exception $e){
            return new JsonResponse(['error'=>$e->getMessage()]);
        }

    }

    /**
     * @Route("/TypeSession/del", name="api_Set_Type_Session", methods={"POST","OPTIONS","GET"})
     * @param Request $request
     * @return Response
     */
    public function DeleteTypeSession(Request $request){
        $data = json_decode($request->getContent(),true);

        $em = $this->getDoctrine()->getManager();
        try{
           $typesession = $em->getRepository('App:TypeSession')->find($data["Id"]);

            $ltp = $typesession->getIdTypeSession();
            for($i = 0;$i < count($ltp);$i++){
                $em->remove($ltp[$i]);
                $em->flush();
            }
            $em->remove($typesession);
            $em->flush();

            return new JsonResponse(['result'=>true]);
        }catch(\Exception $e){
            return new JsonResponse(['error'=>$e->getMessage()]);
        }
    }
}
