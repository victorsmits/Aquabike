<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeSessionRepository")
 */
class TypeSession
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Day;

    /**
     * @ORM\Column(type="time")
     */
    private $Time;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\LienPersonTypeSession", mappedBy="IdTypeSession")
     */
    private $IdTypeSession;

    public function __construct()
    {
        $this->IdTypeSession = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDay(): ?string
    {
        return $this->Day;
    }

    public function setDay(string $Day): self
    {
        $this->Day = $Day;

        return $this;
    }

    public function getTime(): ?\DateTimeInterface
    {
        return $this->Time;
    }

    public function setTime(\DateTimeInterface $Time): self
    {
        $this->Time = $Time;

        return $this;
    }

    /**
     * @return Collection|LienPersonTypeSession[]
     */
    public function getIdTypeSession(): Collection
    {
        return $this->IdTypeSession;
    }

    public function addIdTypeSession(LienPersonTypeSession $idTypeSession): self
    {
        if (!$this->IdTypeSession->contains($idTypeSession)) {
            $this->IdTypeSession[] = $idTypeSession;
            $idTypeSession->setIdTypeSession($this);
        }

        return $this;
    }

    public function removeIdTypeSession(LienPersonTypeSession $idTypeSession): self
    {
        if ($this->IdTypeSession->contains($idTypeSession)) {
            $this->IdTypeSession->removeElement($idTypeSession);
            // set the owning side to null (unless already changed)
            if ($idTypeSession->getIdTypeSession() === $this) {
                $idTypeSession->setIdTypeSession(null);
            }
        }

        return $this;
    }
}
