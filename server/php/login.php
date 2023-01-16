<?php

header('Content-type: json/application');

require_once '../Repositories/userRepository.php';
require_once '../models/user.php';
require_once './tools/createRes.php';
require_once './tools/cookieAndSession.php';
require_once './tools/hash.php';

$userRepository = new UserRepository();

session_start();

$body = json_decode(file_get_contents('php://input'));
if (isset($body->login) && isset($body->password)) {
    $users = $userRepository->Read();
    foreach ($users as $user) {
        if ($user->getLogin() === $body->login) {
            if ($user->getPassasword() === (new Hash)->createPassword($body->password)) {
                createCookieAndSession($user->login, (new Hash)->createPassword($body->password), $user->name);
                echo createRes(true, 'Вы авторизовались');
            } else {
                echo createRes(false, 'Неверный пароль');
            }
        }
    }
}
?>