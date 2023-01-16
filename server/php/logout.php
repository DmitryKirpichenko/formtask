<?php

// принимает запрос на выход из системы

header('Content-type: json/application');

require_once './tools/createRes.php';

session_start();

unset($_SESSION['auth']);
unset($_SESSION['login']);
unset($_SESSION['name']);
session_destroy();
setcookie('name', '', -1);
setcookie('login', '', -1);
setcookie('auth', '', -1);
setcookie('key', '', -1);

echo createRes(true, 'Вы вышли из сессии');
?>