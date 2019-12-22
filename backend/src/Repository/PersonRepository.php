<?php

namespace App\Repository;

use App\Entity\Person;
use App\Entity\TypeSession;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Person|null find($id, $lockMode = null, $lockVersion = null)
 * @method Person|null findOneBy(array $criteria, array $orderBy = null)
 * @method Person[]    findAll()
 * @method Person[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PersonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Person::class);
    }
    public function getPersonFromUsername($Username){
        return $this->findOneBy(array('Username' => $Username));
    }

    public function getPersonFromEmail($Email){
        return $this->findOneBy(array('Email' => $Email));
    }

    public function getPersonFromId($idPerson){
        return $this->findOneBy(array('id' => $idPerson),["date"]);
    }

}
