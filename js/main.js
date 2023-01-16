//import { validateName } from "./validate";
import { SERVER_PATH } from "../constants/constants.js";

let username = document.getElementById("unid");
let helptextname = document.getElementById('helptextname');
console.log('main')
    // username.onblur = function() {
    //     console.log('red')
    //     if (!validateName(username)) {
    //         console.log('red')
    //         username.style.borderColor = "red";
    //         helptextname.style.color = "red";
    //         helptextname.innerHTML = "Минимум 2 символа";
    //     } else {
    //         username.style.borderColor = "black";
    //         helptextname.innerHTML = "";
    //     }

// }

let userLogin = document.getElementById('userlogin');
let helptextlogin = document.getElementById('helptextlogin')

userLogin.onblur = function() {

    if (userLogin.value.length < 5) {
        userLogin.style.borderColor = "red";
    } else {
        userLogin.style.borderColor = "black";
    }

}

// let valid = new Validate(username, helptextname, userLogin, helptextlogin);

let useremail = document.getElementById("usermailid");

useremail.onblur = function() {
    console.log('email')
    if (validateEmail(useremail.value) == false) {
        useremail.style.borderColor = "red";
    } else {
        useremail.style.borderColor = "black";
    }
}

let userpass = document.getElementById("pass1id");

userpass.onblur = function() {
    if (validatePassword(userpass.value) == false) {
        userpass.style.borderColor = "red";
        let helptext = document.getElementById("helptextid");
        helptext.style.color = "red";
        helptext.innerHTML = "Пароль должет состоять из 6 символов. Должена пресуствовать одна буква латинского алфавить в верхнем и нижнем регистре, цифра и спец.символ";
    } else {
        userpass.style.borderColor = "black";
        let helptext = document.getElementById("helptextid");
        helptext.innerHTML = "";

    }
}

let userpass2 = document.getElementById("pass2id");

userpass2.onblur = function() {
    if (userpass.value != userpass2.value) {
        userpass2.style.borderColor = "red";
    } else {
        userpass2.style.borderColor = "black";
    }
}

let form = document.getElementById("formid");

form.onsubmit = async function(event) {
    event.preventDefault();
    let userdata = {
        name: username.value,
        email: useremail.value,
        login: userLogin.value,
        password: userpass2.value
    };

    if (validatePassword(userpass.value) == true && userpass.value == userpass2.value) {
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

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function validatePassword(password) {
    const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return re.test(password);
}