<?php

namespace App\DataFixtures;

use App\Entity\Person;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new Person();
        $user->setFirstName('victor');
        $user->setLastName('smits');
        $user->setAbonnement('19');
        $user->setDay('Mon');
        $user->setUsername('victorsmits');
        $user->setPassword(
            $this->encoder->encodePassword($user,'0000')
        );
        $user->setEmail('no-reply@example.com');
        $user->setRole('ROLE_USER');

        $manager->persist($user);
        $manager->flush();
    }
}
