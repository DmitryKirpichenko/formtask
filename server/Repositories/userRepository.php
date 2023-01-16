<?php

require_once '../models/user.php';
require_once 'IRepository.php';

// класс репозиторий для пользователя
class UserRepository implements IRepository {
    private $path = '/../data/users.json';

    function Read(){
        $json = file_get_contents(__DIR__.$this->path);
        $jsonArray = json_decode($json, true);

        $users = [];

        foreach($jsonArray as $data){
                $user = new User($data['name'], $data['login'], $data['password'], $data['email']);
                $users[] = $user;
        }

        return $users;
    }

    public function Update(User $user, $id)
    {
        $users = $this->read();
        foreach($users as $key => $item){
            if($item['id'] === $id){
                $users[$key] = $user;
                file_put_contents(__DIR__.$this->path, json_encode($users));
                return json_encode(array('message' => 'Пользователь изменён'));
            }
        }
        return json_encode(array('message' => 'Пользователя с таким id нет'));
    }

    public function Create(User $user)
    {
        $users = $this->read();

        foreach ($users as $item) {
            if ($user->getEmail() == $item->getEmail() || $user->getLogin() == $item->getLogin()) {
                return json_encode(array('message' => 'Такой логин или почта уже существует'));
            }
        }
        $users[] = $user->getFullInfo();
        file_put_contents(__DIR__.$this->path, json_encode($users));
        return json_encode(array('message' => 'Пользователь создан'));
    }

    public function Delete(User $user) {
        $users = $this->read();

        foreach ($users as $key => $item) {
            if ($item["login"] === $user->getLogin()) {
                unset($users[$key]);
            }
        }

        file_put_contents(__DIR__.$this->path, json_encode($users));
    }
}

?>