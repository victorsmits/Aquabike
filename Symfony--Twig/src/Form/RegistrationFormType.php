<?php

namespace App\Form;

use App\Entity\Person;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('LastName', TextType::class,[
                'attr' =>[
                    'class' =>'input',
                    'id'=>' ',
                ],
                'label'=>'Nom'
            ])
            ->add('FirstName', TextType::class,[
                'label'=> 'Prenom'
            ])
            ->add('Username', TextType::class)
            ->add('email', EmailType::class)
            ->add('AboType', IntegerType::class,[
                'label'=>'Abonnement'
            ])
            ->add('Day', ChoiceType::class,[
                'choices' => [
                    'Lundi' => 'Mon',
                    'Mardi' => 'Tue',
                    'Mercredi' => 'Wed',
                    'Jeudi' => 'Thu',
                    'Vendredi' => 'Fri',
                ],
                'choice_label' => function ($choice, $key) {
                    if (true === $choice) {
                        return 'Lundi';
                    }

                    return strtoupper($key);
                },
            ])
            ->add('plainPassword', RepeatedType::class,[
                'type' => PasswordType::class,
                'first_options' => [
                    'label' => 'Password'
                ],
                'second_options' => [
                    'label'=>'Password'
                ]
            ])
            ->add('register',SubmitType::class, [
                'attr'=>[
                    'class'=>'submit'
                ]
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Person::class,
        ]);
    }
}
