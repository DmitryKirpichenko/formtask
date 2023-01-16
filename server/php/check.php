<?php
// принимает запросы для проверки кук и сессии

header('Content-type: json/application');

require_once './tools/cookieAndSession.php';
require_once './tools/createRes.php';


session_start();
echo createRes(checkCookieAndSession(), '');
?>