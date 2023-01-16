<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LogIn</title>
    <link rel="stylesheet" href="../css/styled.css" type="text/css" />
    <script type="module" src="../js/check.js"></script>
</head>

<body>
    <form action="#" id="formid">
        <div>
            <h1>Вход</h1>
        </div>
        <div>
            <input id="userlogin" required placeholder="Введите логин" name="login" type="text" minlength="2">
            <p id="helptextlogin"></p>
        </div>
        <div>
            <input id="pass" required placeholder="Введите пароль" name="userpass" type="password">
            <p id="helptextpassword"></p>
        </div>
        <div>
            Нет аккаунта?
            <a href="../index.php">Регистрация</a>
        </div>
        <p id="helptextid"></p>
        <div>
            <button>Войти</button>
        </div>
    </form>

    <script type="module" src="../js/login.js"></script>
</body>

</html>