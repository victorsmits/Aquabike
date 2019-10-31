<?php

namespace Proxies\__CG__\App\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Person extends \App\Entity\Person implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Proxy\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = [];



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'LastName', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'FirstName', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Abonnement', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Day', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Id_Inscription', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Password', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'plainPassword', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'role', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Username', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Email', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'AboType'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'LastName', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'FirstName', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Abonnement', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Day', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Id_Inscription', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Password', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'plainPassword', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'role', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Username', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'Email', '' . "\0" . 'App\\Entity\\Person' . "\0" . 'AboType'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Person $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId(): ?int
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function getLastName(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLastName', []);

        return parent::getLastName();
    }

    /**
     * {@inheritDoc}
     */
    public function setLastName(string $LastName): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLastName', [$LastName]);

        return parent::setLastName($LastName);
    }

    /**
     * {@inheritDoc}
     */
    public function getFirstName(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFirstName', []);

        return parent::getFirstName();
    }

    /**
     * {@inheritDoc}
     */
    public function setFirstName(string $FirstName): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFirstName', [$FirstName]);

        return parent::setFirstName($FirstName);
    }

    /**
     * {@inheritDoc}
     */
    public function getAbonnement(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAbonnement', []);

        return parent::getAbonnement();
    }

    /**
     * {@inheritDoc}
     */
    public function setAbonnement(int $Abonnement): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAbonnement', [$Abonnement]);

        return parent::setAbonnement($Abonnement);
    }

    /**
     * {@inheritDoc}
     */
    public function getDay(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDay', []);

        return parent::getDay();
    }

    /**
     * {@inheritDoc}
     */
    public function setDay(string $Day): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDay', [$Day]);

        return parent::setDay($Day);
    }

    /**
     * {@inheritDoc}
     */
    public function getPassword(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPassword', []);

        return parent::getPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setPassword(string $Password): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPassword', [$Password]);

        return parent::setPassword($Password);
    }

    /**
     * {@inheritDoc}
     */
    public function getPlainPassword()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPlainPassword', []);

        return parent::getPlainPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setPlainPassword($plainPassword): void
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPlainPassword', [$plainPassword]);

        parent::setPlainPassword($plainPassword);
    }

    /**
     * {@inheritDoc}
     */
    public function getRole(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getRole', []);

        return parent::getRole();
    }

    /**
     * {@inheritDoc}
     */
    public function setRole(string $role): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setRole', [$role]);

        return parent::setRole($role);
    }

    /**
     * {@inheritDoc}
     */
    public function getUsername(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUsername', []);

        return parent::getUsername();
    }

    /**
     * {@inheritDoc}
     */
    public function setUsername(string $Username): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUsername', [$Username]);

        return parent::setUsername($Username);
    }

    /**
     * {@inheritDoc}
     */
    public function getEmail(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getEmail', []);

        return parent::getEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function setEmail(string $Email): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setEmail', [$Email]);

        return parent::setEmail($Email);
    }

    /**
     * {@inheritDoc}
     */
    public function getIdInscription(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getIdInscription', []);

        return parent::getIdInscription();
    }

    /**
     * {@inheritDoc}
     */
    public function addIdInscription(\App\Entity\Inscription $idInscription): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addIdInscription', [$idInscription]);

        return parent::addIdInscription($idInscription);
    }

    /**
     * {@inheritDoc}
     */
    public function removeIdInscription(\App\Entity\Inscription $idInscription): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeIdInscription', [$idInscription]);

        return parent::removeIdInscription($idInscription);
    }

    /**
     * {@inheritDoc}
     */
    public function serialize()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'serialize', []);

        return parent::serialize();
    }

    /**
     * {@inheritDoc}
     */
    public function unserialize($string)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'unserialize', [$string]);

        return parent::unserialize($string);
    }

    /**
     * {@inheritDoc}
     */
    public function getRoles()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getRoles', []);

        return parent::getRoles();
    }

    /**
     * {@inheritDoc}
     */
    public function getSalt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSalt', []);

        return parent::getSalt();
    }

    /**
     * {@inheritDoc}
     */
    public function eraseCredentials()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'eraseCredentials', []);

        return parent::eraseCredentials();
    }

    /**
     * {@inheritDoc}
     */
    public function getAboType(): ?int
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAboType', []);

        return parent::getAboType();
    }

    /**
     * {@inheritDoc}
     */
    public function setAboType(int $AboType): \App\Entity\Person
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAboType', [$AboType]);

        return parent::setAboType($AboType);
    }

}
