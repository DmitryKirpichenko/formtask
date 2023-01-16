import { SERVER_PATH } from "../constants/constants.js";

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

    if (validatePassword(userpass) && validateLogin(userLogin)) {
        try {
            let response = await fetch(SERVER_PATH + 'login.php', {
                method: 'POST',
                headers: { 'X-Requested-With': 'FetchAjaxRequest' },
                body: JSON.stringify(userdata)
            });

            const data = await response.json()
            location.reload();
        } catch {
            alert('Сервер не отвечает, попробуйте позже.');
        }
    } else {
        alert('Неверные данные');
    }


};