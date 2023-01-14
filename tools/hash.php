<?php 

    function hash($str){
        return md5($str);
    }

    function compHash($str, $hashStr){
        return $hashStr === hash($str);
    }

?>