<?php

class User
{
    // свойства пользователя
    public $name;
    public $login;
    public $password;
    public $email;

    // конструктор для создания пользователя
    public function __construct($name, $login, $password, $email)
    {
        $this->name = $name;
        $this->login = $login;
        $this->password = $password;
        $this->email = $email;
    }

    public function getLogin() {
        return $this->login;
    }

    public function setLogin($value) {
        $this->login = $value;
    }

    public function getPassasword() {
        return $this->password;
    }

    public function setPass($value) {
        $this->password = $value;
    }

    public function getEmail() {
        return $this->email;
    }
    public function setEmail($value) {
        $this->email = $value;
    }

    public function setName($value) {
        $this->name = $value;
    }

    public function getName() {
        return $this->name;
    }

    public function getFullInfo()
    {
        return [
            'name' => $this->name, 
            'email' => $this->email,
            'login' => $this->login,
            'password' => $this->password,
        ];
    }
}
?>