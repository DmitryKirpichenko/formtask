<?php
session_start();
if(isset($_SESSION['auth']) && $_SESSION['auth']){
    header('Location: ./view/welcom.php');
} 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registet</title>
    <link rel="stylesheet" href="./css/styled.css" type="text/css" />
    <script type="module" src="./js/check.js"> </script>
    <noscript>
    <link rel="stylesheet" href="./css/noscript.css" type="text/css" />
    </noscript>
</head>

<body>
    <form action="#" id="formid">
        <div>
            <h1>Регистрация</h1>
        </div>
        <div>
            <input id="unid" required placeholder="Введите имя" name="username" type="text" minlength="2">
            <p id="helptextname"></p>
        </div>
        <div>
            <input id="userlogin" required placeholder="Введите логин" name="login" type="text" minlength="6">
            <p id="helptextlogin"></p>
        </div>
        <div>
            <input id="usermailid" required placeholder="Введите E-mail" name="useremail" type="email">
            <p id="helptextemail"></p>
        </div>
        <div>
            <input id="pass1id" required placeholder="Введите пароль" name="userpass" type="password">
            <p id="helptextpassword"></p>
        </div>
        <div>
            <input id="pass2id" required placeholder="Повторите пароль" name="userpass2" type="password">
            <p id="helptextsecondpassword"></p>
        </div>
        <div>
            Уже есть аккаунт?
            <a href="./view/login.php">Войти</a>
        </div>
        <p id="helptextid"></p>
        <div>
            <button class="submitBtn">Зарегистрироваться</button>
        </div>
    </form>

    <script type="module" src="./js/main.js"></script>
</body>

</html>