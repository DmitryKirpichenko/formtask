<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registet</title>
    <link rel="stylesheet" href="../css/styled.css" type="text/css" />
    <script src="../js/check.js"> </script>
    <noscript></noscript>
</head>

<body>
    <form action="#" id="formid">
        <div>
            <h1>Регистрация</h1>
        </div>
        <div>
            <input id="unid" required placeholder="Введите имя" name="username" type="text" minlength="2">
        </div>
        <div>
            <input id="userlogin" required placeholder="Введите логин" name="login" type="text" minlength="2">
        </div>
        <div>
            <input id="usermailid" required placeholder="Введите E-mail" name="useremail" type="email">
        </div>
        <div>
            <input id="pass1id" required placeholder="Введите пароль" name="userpass" type="password">
        </div>
        <div>
            <input id="pass2id" required placeholder="Повторите пароль" name="userpass2" type="password">
        </div>
        <div>
            Уже есть аккаунт?
            <a href="./login.php">Войти</a>
        </div>
        <p id="helptextid"></p>
        <div>
            <button>Зарегистрироваться</button>
        </div>
    </form>

    <script src="../js/main.js"></script>
</body>

</html>