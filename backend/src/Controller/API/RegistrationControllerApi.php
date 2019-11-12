<?php

namespace App\Controller\API;

use App\Entity\Person;
use App\Form\RegistrationFormType;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
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
            $errors[] = "Password does not match the password confirmation.";
        }
        if(strlen($password) < 2)
        {
            $errors[] = "Password should be at least 6 characters.";
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
            $user->setPassword($encodedPassword);

            try
            {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();
                return $this->json(['user' => $user]);
            }
            catch(UniqueConstraintViolationException $e)
            {
                $errors = "The email or user provided already has an account!";
            }
            catch(\Exception $e)
            {
                $errors = "Unable to save new user at this time.";
            }
        }
        return new JsonResponse([
            'errors' => $errors
        ], 400);
    }
}
