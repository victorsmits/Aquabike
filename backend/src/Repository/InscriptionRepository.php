<?php

namespace App\Repository;

use App\Entity\Inscription;
use App\Entity\Person;
use App\Entity\Session;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Inscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method Inscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method Inscription[]    findAll()
 * @method Inscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InscriptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Inscription::class);
    }

    public function getInscriptionFromSessionId($idSession){
        return $this->findBy(array('Id_Session' => $idSession));
    }

    public function getInscriptionFromPersonId($user){
        return $this->findBy(array('Id_Person'=>$user));
    }

    public function findInscription($session,$user){
        /**
        * @var $user Person
        * @var $session Session
         */
        return $this->findOneBy(array('Id_Session' => $session->getId(),'Id_Person'=>$user->getId()));
    }

    public function checkIfInscription($Id_session,$user){
        $inscription = $this->findInscription($Id_session,$user);
        if(!empty($inscription)){
            return true;
        }else{
            return false;
        }
    }
}
