<?php


function logout()
{
    session_start();

    unset($_SESSION['auth']);
    unset($_SESSION['login']);
    unset($_SESSION['name']);
    session_destroy();
    setcookie('name', null, -1);
    setcookie('login', null, -1);
    setcookie('auth', null, -1);
    setcookie('key', null, -1);
}
?>
