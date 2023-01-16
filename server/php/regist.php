<?php

header('Content-type: json/application');

require_once '../Repositories/userRepository.php';
require_once '../models/user.php';
require_once './tools/createRes.php';
require_once './tools/cookieAndSession.php';
require_once './tools/hash.php';

if ($_SERVER['HTTP_X_REQUESTED_WITH'] !== "FetchAjaxRequest")
    die(createRes(false, 'Ожидался ajax-запрос'));

$userRepository = new UserRepository();

session_start();

$body = json_decode(file_get_contents('php://input'));
if (isset($body->name) && isset($body->login) && isset($body->email) && isset($body->password)) {
    $new_user = new User($body->name, $body->login, (new Hash)->createPassword($body->password), $body->email);
    $userRepository->Create($new_user);
    createCookieAndSession($body->login, (new Hash)->createPassword($body->password), $body->name);
    echo createRes(true, 'Пользователь создан');
    
} else echo createRes(false, 'Должны быть все данные');
?>