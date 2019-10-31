<?php

namespace App\Repository;

use App\Entity\Session;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Session|null find($id, $lockMode = null, $lockVersion = null)
 * @method Session|null findOneBy(array $criteria, array $orderBy = null)
 * @method Session[]    findAll()
 * @method Session[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Session::class);
    }

    public function getSessionFromId($Id){
        return $this->findOneBy(array('id' => $Id));
    }

    public function getMonthSessionList($month, $year){
        // Create two times at the start of this month and next month
        $startDate = DateTime::createFromFormat('d-n-Y', "01-".$month."-".$year);
        $startDate->setTime(0, 0 ,0);

        $endDate = DateTime::createFromFormat('d-n-Y', "01-".($month+1)."-".$year);
        $endDate->setTime(0, 0, 0);

        return $this
            ->createQueryBuilder('n')
            ->where('n.Date BETWEEN :start AND :end')
            ->setParameter('start', $startDate)
            ->setParameter('end', $endDate)
            ->getQuery()
            ->getResult();
    }

    public function getTodayIdSession(){
        $today = new \DateTime('now');
        return $this->findBy(array('Date' => $today));
    }
}
