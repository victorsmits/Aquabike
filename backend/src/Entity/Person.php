<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use http\Client\Curl\User;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PersonRepository")
 * @UniqueEntity(fields={"Username"}, message="There is already an account with this Username")
 * @UniqueEntity(fields={"Email"}, message="There is already an account with this Email")
 */
class Person implements \Serializable, UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @MaxDepth(1)
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("Home")
     */
    private $LastName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("Home")
     */
    private $FirstName;

    /**
     * @ORM\Column(type="integer")
     */
    private $Abonnement;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Day;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Inscription", mappedBy="Id_Person")
     */
    private $Id_Inscription;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Password;

    private $plainPassword;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $role = 'ROLE_USER';

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $Username;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $Email;

    /**
     * @ORM\Column(type="integer")
     */
    private $AboType;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $Day2;

    /**
     * @ORM\Column(type="time")
     */
    private $Time;

    /**
     * @ORM\Column(type="time", nullable=true)
     */
    private $Time2;

    public function __construct()
    {
        $this->Id_Inscription = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastName(): ?string
    {
        return $this->LastName;
    }

    public function setLastName(string $LastName): self
    {
        $this->LastName = $LastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->FirstName;
    }

    public function setFirstName(string $FirstName): self
    {
        $this->FirstName = $FirstName;

        return $this;
    }

    public function getAbonnement(): ?int
    {
        return $this->Abonnement;
    }

    public function setAbonnement(int $Abonnement): self
    {
        $this->Abonnement = $Abonnement;

        return $this;
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

    public function getPassword(): ?string
    {
        return $this->Password;
    }

    public function setPassword(string $Password): self
    {
        $this->Password = $Password;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * @param mixed $plainPassword
     */
    public function setPlainPassword($plainPassword): void
    {
        $this->plainPassword = $plainPassword;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): self
    {
        $this->role = $role;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->Username;
    }

    public function setUsername(string $Username): self
    {
        $this->Username = $Username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(string $Email): self
    {
        $this->Email = $Email;

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
            $idInscription->setIdPerson($this);
        }

        return $this;
    }

    public function removeIdInscription(Inscription $idInscription): self
    {
        if ($this->Id_Inscription->contains($idInscription)) {
            $this->Id_Inscription->removeElement($idInscription);
            // set the owning side to null (unless already changed)
            if ($idInscription->getIdPerson() === $this) {
                $idInscription->setIdPerson(null);
            }
        }

        return $this;
    }

    /**
     * String representation of object
     * @link https://php.net/manual/en/serializable.serialize.php
     * @return string the string representation of the object or null
     * @since 5.1.0
     */
    public function serialize()
    {
        return serialize([$this->id,
            $this->Username,
            $this->Email,
            $this->Password]);
    }

    /**
     * Constructs the object
     * @link https://php.net/manual/en/serializable.unserialize.php
     * @param string $serialized <p>
     * The string representation of the object.
     * </p>
     * @return void
     * @since 5.1.0
     */
    public function unserialize($string)
    {
        list(
            $this->id,
            $this->Username,
            $this->Email,
            $this->Password
            ) = unserialize($string, ['allowed_classes'=> false]);
    }

    /**
     * Returns the roles granted to the user.
     *
     *     public function getRoles()
     *     {
     *         return ['ROLE_USER'];
     *     }
     *
     * Alternatively, the roles might be stored on a ``roles`` property,
     * and populated in any number of different ways when the user object
     * is created.
     *
     * @return (Role|string)[] The user roles
     */
    public function getRoles()
    {
        return [$this->role,];
    }

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
        return null;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {
        $this->plainPassword = null;
    }

    public function getAboType(): ?int
    {
        return $this->AboType;
    }

    public function setAboType(int $AboType): self
    {
        $this->AboType = $AboType;

        return $this;
    }

    public function getDay2(): ?string
    {
        return $this->Day2;
    }

    public function setDay2(?string $Day2): self
    {
        $this->Day2 = $Day2;

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

    public function getTime2(): ?\DateTimeInterface
    {
        return $this->Time2;
    }

    public function setTime2(?\DateTimeInterface $Time2): self
    {
        $this->Time2 = $Time2;

        return $this;
    }
}
