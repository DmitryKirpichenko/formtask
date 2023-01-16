<?php

require_once __DIR__.'/../../Repositories/userRepository.php';

function createCookieAndSession($login, $password, $name)
{
   // session_start();

    $_SESSION['auth'] = true;
    $_SESSION['login'] = $login;
    $_SESSION['name'] = $name;

    $key = $password;

    setcookie('auth', true, time() + 30000);
    setcookie('login', $login, time() + 30000);
    setcookie('key', $key, time() + 30000);
    setcookie('name', $name, time() + 30000);
}

function checkCookieAndSession()
{
    //session_start();
    if (isset($_SESSION['auth']) && empty($_SESSION['auth']) && $_SESSION['auth'] == false) {
        if (!empty($_COOKIE['login']) && !empty($_COOKIE['key']) && !empty($_COOKIE['name'])) {

            $login = $_COOKIE['login'];
            $key = $_COOKIE['key'];
            $name = $_COOKIE['name'];

            $userRepository =  new UserRepository();

            $users = $userRepository->Read();

            foreach ($users as $user) {
                if ($user->getLogin() === $login && $user->getPassasword() === $key) {
                    session_start();

                    $_SESSION['auth'] = true;
                    $_SESSION['login'] = $login;
                    $_SESSION['name'] = $name;
                }
            }
        }
    }
    if(isset($_SESSION['auth']) && $_SESSION['auth']){
        return true;
    }
    return false;
}
