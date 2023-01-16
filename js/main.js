import {
    validateName,
    blurName,
    validateEmail,
    blurEmail,
    validateLogin,
    blurLogin,
    validatePassword,
    blurPassword,
    validateSecondPassword,
    blurSecondPassword
} from "./validate.js";

import { SERVER_PATH } from "../constants/constants.js";

let username = document.getElementById("unid");
let helptextname = document.getElementById('helptextname');
blurName(username, helptextname)

let userLogin = document.getElementById('userlogin');
let helptextlogin = document.getElementById('helptextlogin')
blurLogin(userLogin, helptextlogin)

let useremail = document.getElementById("usermailid");
let helptextemail = document.getElementById('helptextemail')
blurEmail(useremail, helptextemail)

let userpass = document.getElementById("pass1id");
let helptextpassword = document.getElementById('helptextpassword')
blurPassword(userpass, helptextpassword)

let userpass2 = document.getElementById("pass2id");
let helptextsecondpassword = document.getElementById('helptextsecondpassword')
blurSecondPassword(userpass2, userpass, helptextsecondpassword)

let form = document.getElementById("formid");

form.onsubmit = async function(event) {
    event.preventDefault();
    let userdata = {
        name: username.value,
        email: useremail.value,
        login: userLogin.value,
        password: userpass2.value
    };
    if (validatePassword(userpass) && validateName(username) && validateLogin(userLogin) && validateEmail(useremail) && validateSecondPassword(userpass, userpass2)) {
        try {
            let response = await fetch(SERVER_PATH + 'regist.php', {
                method: 'POST',
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