<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SessionRepository")
 */
class Session
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $Date;

    /**
     * @ORM\Column(type="time")
     */
    private $time;

    /**
     * @ORM\Column(type="integer")
     */
    private $bike;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Inscription", mappedBy="Id_Session")
     */
    private $Id_Inscription;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $Cancel;

    public function __construct()
    {
        $this->Id_Inscription = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = $Date;

        return $this;
    }

    public function getTime(): ?\DateTimeInterface
    {
        return $this->time;
    }

    public function setTime(\DateTimeInterface $time): self
    {
        $this->time = $time;

        return $this;
    }

    public function getBike(): ?int
    {
        return $this->bike;
    }

    public function setBike(int $bike): self
    {
        $this->bike = $bike;

        return $this;
    }

    /**
     * @return Collection|Inscription[]
     */
    public function getIdInscription(): Collection
    {
        return $this->Id_Inscription;
    }

    public function addIdInscription(Inscription $idInscription): self
    {
        if (!$this->Id_Inscription->contains($idInscription)) {
            $this->Id_Inscription[] = $idInscription;
            $idInscription->setIdSession($this);
        }

        return $this;
    }

    public function removeIdInscription(Inscription $idInscription): self
    {
        if ($this->Id_Inscription->contains($idInscription)) {
            $this->Id_Inscription->removeElement($idInscription);
            // set the owning side to null (unless already changed)
            if ($idInscription->getIdSession() === $this) {
                $idInscription->setIdSession(null);
            }
        }

        return $this;
    }

    public function getCancel(): ?bool
    {
        return $this->Cancel;
    }

    public function setCancel(?bool $Cancel): self
    {
        $this->Cancel = $Cancel;

        return $this;
    }
}
