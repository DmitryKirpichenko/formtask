<?php 

    function createRes($status, $message){
        return json_encode(array('status' => $status, 'message' => $message));
    }

?>