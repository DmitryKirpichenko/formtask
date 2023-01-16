<?php 

class Hash{
    private $static_salt = 'saf9808-safasf8868576safs687as6das6588sdas75';

    public static function createPassword($password){
        return md5((new Hash)->static_salt . $password);
    }

    public static function comparePassword($password, $hashedPassword){
        return (new Hash)->createPassword($password) === $hashedPassword;
    }

}
?>