<?php

header('Content-type: json/application');

require_once './Repositories/userRepository.php';
require_once './models/user.php';
require_once './tools/createRes.php';
require_once './tools/cookieAndSession.php';
require_once './tools/logout.php';

$type = $_GET['q'];

$userRepository = new UserRepository();

session_start();

switch ($type) {
    case 'regist':
        $body = json_decode(file_get_contents('php://input'));
        if(isset($body->name) && isset($body->login) && isset($body->email) && isset($body->password)){
            $new_user = new User(0, $body->name, $body->login, md5($body->password), $body->email);
            $userRepository->Create($new_user);
            createCookieAndSession($body->login, $body->password, $body->name);
            echo createRes(true, 'Пользователь создан');
            break;
        }
        echo createRes(false, 'Должны быть все данные');
        break;
    case 'login':
        $body = json_decode(file_get_contents('php://input'));
        if(isset($body->login) && isset($body->password)){
            $users = $userRepository->Read();
            foreach($users as $user){
                if($user->getLogin() === $body->login){
                    if($user->getPassasword() === $body->password){
                        createCookieAndSession($user->login, $user->password, $user->name);
                        echo createRes(true, 'Вы авторизовались');
                    } else {
                        echo createRes(false, 'Неверный пароль');
                    }      
                }
            }
            // echo createRes(false, 'Нет пользователя с таким паролем');
            break;
        }
        echo createRes(false, 'Должны быть все данные');
        break;

    case 'logout':
        logout();
        echo createRes(true, 'Вы вышли из сессии');
        break;

    case 'check':
        echo createRes(checkCookieAndSession(), '');
        break;
    default:
        $userRepository->Read();
        echo json_encode(array('message' => 'Неверный запрос'));
        break;
}

?>