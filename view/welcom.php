<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcom</title>
    <link rel="stylesheet" href="../css/styled.css" type="text/css" />
    <script src="../js/check.js"></script>
</head>

<body>
    <span>Hello, </span>
    <?php
    session_start();
    if ($_SESSION['name']) {
        echo $_SESSION['name'];
    }
    ?>
    <button id="logOutButton">Выйти</button>
    <script src="../js/logout.js"></script>
</body>

</html>