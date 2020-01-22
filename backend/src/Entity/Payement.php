<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PayementRepository")
 */
class Payement
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
    private $Start_Date;

    /**
     * @ORM\Column(type="date")
     */
    private $End_Date;

    /**
     * @ORM\Column(type="integer")
     */
    private $Amount;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Person", inversedBy="payements")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Person;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $Finish;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->Start_Date;
    }

    public function setStartDate(\DateTimeInterface $Start_Date): self
    {
        $this->Start_Date = $Start_Date;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->End_Date;
    }

    public function setEndDate(\DateTimeInterface $End_Date): self
    {
        $this->End_Date = $End_Date;

        return $this;
    }

    public function getAmount(): ?int
    {
        return $this->Amount;
    }

    public function setAmount(int $Amount): self
    {
        $this->Amount = $Amount;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->Type;
    }

    public function setType(string $Type): self
    {
        $this->Type = $Type;

        return $this;
    }

    public function getPerson(): ?Person
    {
        return $this->Person;
    }

    public function setPerson(?Person $Person): self
    {
        $this->Person = $Person;

        return $this;
    }

    public function getFinish(): ?bool
    {
        return $this->Finish;
    }

    public function setFinish(?bool $Finish): self
    {
        $this->Finish = $Finish;

        return $this;
    }
}
