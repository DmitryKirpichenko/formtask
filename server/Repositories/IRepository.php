<?php

require_once("../models/user.php");

interface IRepository{
    public function Read();
    public function Update(User $user, $id);
    public function Create(User $user);
    public function Delete(User $user);
}

?>