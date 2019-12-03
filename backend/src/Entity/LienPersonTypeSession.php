<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LienPersonTypeSessionRepository")
 */
class LienPersonTypeSession
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Person", inversedBy="IdPerson")
     * @ORM\JoinColumn(nullable=false)
     */
    private $IdPerson;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeSession", inversedBy="IdTypeSession")
     * @ORM\JoinColumn(nullable=false)
     */
    private $IdTypeSession;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdPerson(): ?Person
    {
        return $this->IdPerson;
    }

    public function setIdPerson(?Person $IdPerson): self
    {
        $this->IdPerson = $IdPerson;

        return $this;
    }

    public function getIdTypeSession(): ?TypeSession
    {
        return $this->IdTypeSession;
    }

    public function setIdTypeSession(?TypeSession $IdTypeSession): self
    {
        $this->IdTypeSession = $IdTypeSession;

        return $this;
    }
}
