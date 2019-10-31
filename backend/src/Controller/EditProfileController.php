<?php

namespace App\Controller;

use App\Entity\Person;
use App\Form\RegistrationFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class EditProfileController extends AbstractController
{
    /**
     * @Route("/profile/edit", name="edit_profile")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $userId = $this->getUser()->getId();
        $entityManager = $this->getDoctrine()->getManager();

        $user = $entityManager
            ->getRepository('App:Person')
            ->getPersonFromId($userId);

        $form = $this->createForm(RegistrationFormType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            $token = new UsernamePasswordToken(
                $user,
                $passwordEncoder,
                'main',
                $user->getRoles()
            );

            $this->get('security.token_storage')->setToken($token);
            $this->get('session')->set('_security_main',serialize($token));

            return $this->redirectToRoute('home');
        }

        return $this->render('edit_profile/EditPorfile.html.twig', [
            'form'=>$form->createView(),
        ]);
    }
}
