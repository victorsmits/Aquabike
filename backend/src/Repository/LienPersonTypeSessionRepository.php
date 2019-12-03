<?php

namespace App\Repository;

use App\Entity\LienPersonTypeSession;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method LienPersonTypeSession|null find($id, $lockMode = null, $lockVersion = null)
 * @method LienPersonTypeSession|null findOneBy(array $criteria, array $orderBy = null)
 * @method LienPersonTypeSession[]    findAll()
 * @method LienPersonTypeSession[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LienPersonTypeSessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LienPersonTypeSession::class);
    }

    // /**
    //  * @return LienPersonTypeSession[] Returns an array of LienPersonTypeSession objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LienPersonTypeSession
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
