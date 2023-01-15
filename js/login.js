let userLogin = document.getElementById('userlogin');

userLogin.onblur = function() {

    if (userLogin.value.length < 5) {
        userLogin.style.borderColor = "red";
    } else {
        userLogin.style.borderColor = "black";
    }

}

let userpass = document.getElementById("pass");

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

let form = document.getElementById("formid");

form.onsubmit = async function(event) {
    event.preventDefault();
    let userdata = {
        login: userLogin.value,
        password: userpass.value
    };

    if (validatePassword(userpass.value)) {
        try {
            let response = await fetch('http://formtask/login', {
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

function validatePassword(password) {
    const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return re.test(password);
}