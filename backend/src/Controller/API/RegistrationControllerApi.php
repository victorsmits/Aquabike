<?php

namespace App\Controller\API;

use App\Entity\Person;
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

/**
 *@Route("/api")
 */
class RegistrationControllerApi extends AbstractController
{
    /**
     * @Route("/register", name="api_user_registration", methods={"POST","OPTIONS","GET"})
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return RedirectResponse|Response
     * @throws Exception
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {

        $user = new Person();
        $data = json_decode($request->getContent(), true);

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
            $user->setDay($data['Jour']);
            $user->setTime(new DateTime($data["Time"]));
            $user->setDay2($data['Jour2']);
            $user->setTime2(new DateTime($data["Time2"]));
            $user->setPassword($encodedPassword);

            try
            {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();
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
        return new JsonResponse([
            'errors' => $errors
        ], 400);
    }
}
