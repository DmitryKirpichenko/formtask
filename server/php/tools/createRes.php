<?php 

    // функция для создания ответа сервера
    function createRes($status, $message, $string_type = ''){
        return json_encode(array('status' => $status, 'message' => $message, 'string_type' => $string_type));
    }

?>