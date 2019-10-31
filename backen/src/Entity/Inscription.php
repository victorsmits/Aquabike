<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InscriptionRepository")
 */
class Inscription
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @MaxDepth(1)
     */
    private $id;

    /**
     * @MaxDepth(1)
     * @ORM\ManyToOne(targetEntity="App\Entity\Session", inversedBy="Id_Inscription")
     * @ORM\JoinColumn(nullable=false)
     *
     */
    private $Id_Session;

    /**
     * @MaxDepth(1)
     * @ORM\ManyToOne(targetEntity="App\Entity\Person", inversedBy="Id_Inscription")
     * @ORM\JoinColumn(nullable=false)
     *
     */
    private $Id_Person;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdSession(): ?Session
    {
        return $this->Id_Session;
    }

    public function setIdSession(?Session $Id_Session): self
    {
        $this->Id_Session = $Id_Session;

        return $this;
    }

    public function getIdPerson(): ?Person
    {
        return $this->Id_Person;
    }

    public function setIdPerson(?Person $Id_Person): self
    {
        $this->Id_Person = $Id_Person;

        return $this;
    }

}
