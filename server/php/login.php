<?php

// принимает запрос на вход в систему

header('Content-type: json/application');

require_once '../Repositories/userRepository.php';
require_once '../models/user.php';
require_once './tools/createRes.php';
require_once './tools/cookieAndSession.php';
require_once './tools/hash.php';

// проверяем, что пришел ajax-запрос, если нет то отправляем сообщение
if ($_SERVER['HTTP_X_REQUESTED_WITH'] !== "FetchAjaxRequest")
    die(createRes(false, 'Ожидался ajax-запрос'));

$userRepository = new UserRepository();

session_start();

// вытаскиваем данные из запроса
$body = json_decode(file_get_contents('php://input'));
//проверяем наличие данных
if (isset($body->login) && isset($body->password)) {
    $users = $userRepository->Read();
    foreach ($users as $user) {
        // проверяем есть ли пользователь с таким логином
        if ($user->getLogin() === $body->login) {
            // проверяем подходит ли пароль
            if ($user->getPassasword() === (new Hash)->createPassword($body->password)) {
                createCookieAndSession($user->login, (new Hash)->createPassword($body->password), $user->name);
                echo createRes(true, 'Вы авторизовались');
                die();
            } else {
                echo createRes(false, 'Неверный пароль', 'password');
                die();
            }
        }
    }
    echo createRes(false, 'Неверный логин', 'login');
}
?>