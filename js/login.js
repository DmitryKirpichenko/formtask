import { SERVER_PATH_FROM_FOLDER } from "../constants/constants.js";

import {
    validateLogin,
    blurLogin,
    validatePassword,
    blurPassword,
} from "./validate.js";

let userLogin = document.getElementById('userlogin');
let helptextlogin = document.getElementById('helptextlogin')
blurLogin(userLogin, helptextlogin)

let userpass = document.getElementById('pass');
let helptextpassword = document.getElementById('helptextpassword')
blurPassword(userpass, helptextpassword)

let form = document.getElementById('formid');

form.onsubmit = async function(event) {
    event.preventDefault();
    let userdata = {
        login: userLogin.value,
        password: userpass.value
    };

    // Если есть ошибки, то данные не отправляем
    if (validatePassword(userpass) && validateLogin(userLogin)) {
        try {
            let response = await fetch(SERVER_PATH_FROM_FOLDER + 'login.php', {
                method: 'POST',
                headers: { 'X-Requested-With': 'FetchAjaxRequest' },
                body: JSON.stringify(userdata)
            });

            const data = await response.json()
            console.log(data)
            helptextpassword.innerHTML = ''
            helptextlogin.innerHTML = ''
                // Проверяем ответ от сервера, если ошибка то выводим её в нужном поле
            if (data.status)
                location.reload();
            else {
                if (data.string_type == 'password') { helptextpassword.innerHTML = data.message; }
                if (data.string_type == 'login') { helptextlogin.innerHTML = data.message; }
            }
        } catch {
            alert('Сервер не отвечает, попробуйте позже.');
        }
    } else {
        alert('Неверные данные');
    }


};