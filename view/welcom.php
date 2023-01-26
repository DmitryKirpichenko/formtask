<?php 
    session_start();
    if(!isset($_SESSION['auth']) || !$_SESSION['auth']){
        header('Location: ../index.php');
    } 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcom</title>
    <link rel="stylesheet" href="../css/styled.css" type="text/css" />
    <!-- <script type="module" src="../js/check.js"></script> -->
</head>

<body>
    <span>Hello, </span>
    <?php
    if ($_SESSION['name']) {
        echo $_SESSION['name'];
    }
    ?>
    <button id="logOutButton">Выйти</button>
    <script type="module" src="../js/logout.js"></script>
</body>

</html>