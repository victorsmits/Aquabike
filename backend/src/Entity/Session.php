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
     * @Groups({"Profile"})
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     * @Groups({"Home"})
     */
    private $Date;

    /**
     * @ORM\Column(type="time")
     * @Groups({"Home"})
     */
    private $time;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Home"})
     */
    private $bike;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Inscription", mappedBy="Id_Session")
     * @Groups({"Home"})
     */
    private $Inscription;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"Home"})
     */
    private $Cancel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeSession", inversedBy="Sessions")
     * @ORM\JoinColumn(nullable=true)
     */
    private $IdTypeSession;

    public function __construct()
    {
        $this->Inscription = new ArrayCollection();
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
        return $this->Inscription;
    }

    public function addIdInscription(Inscription $idInscription): self
    {
        if (!$this->Inscription->contains($idInscription)) {
            $this->Inscription[] = $idInscription;
            $idInscription->setIdSession($this);
        }

        return $this;
    }

    public function removeIdInscription(Inscription $idInscription): self
    {
        if ($this->Inscription->contains($idInscription)) {
            $this->Inscription->removeElement($idInscription);
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
