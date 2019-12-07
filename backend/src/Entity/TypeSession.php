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
    private $IdLienTypeSession;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Session", mappedBy="IdTypeSession")
     */
    private $Sessions;

    public function __construct()
    {
        $this->IdLienTypeSession = new ArrayCollection();
        $this->Sessions = new ArrayCollection();
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
        return $this->IdLienTypeSession;
    }

    public function addIdTypeSession(LienPersonTypeSession $idTypeSession): self
    {
        if (!$this->IdLienTypeSession->contains($idTypeSession)) {
            $this->IdLienTypeSession[] = $idTypeSession;
            $idTypeSession->setIdTypeSession($this);
        }

        return $this;
    }

    public function removeIdTypeSession(LienPersonTypeSession $idTypeSession): self
    {
        if ($this->IdLienTypeSession->contains($idTypeSession)) {
            $this->IdLienTypeSession->removeElement($idTypeSession);
            // set the owning side to null (unless already changed)
            if ($idTypeSession->getIdTypeSession() === $this) {
                $idTypeSession->setIdTypeSession(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Session[]
     */
    public function getSessions(): Collection
    {
        return $this->Sessions;
    }

    public function addSession(Session $session): self
    {
        if (!$this->Sessions->contains($session)) {
            $this->Sessions[] = $session;
            $session->setIdTypeSession($this);
        }

        return $this;
    }

    public function removeSession(Session $session): self
    {
        if ($this->Sessions->contains($session)) {
            $this->Sessions->removeElement($session);
            // set the owning side to null (unless already changed)
            if ($session->getIdTypeSession() === $this) {
                $session->setIdTypeSession(null);
            }
        }

        return $this;
    }
}
