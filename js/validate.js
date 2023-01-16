export function validateName(elem) {
    if (elem.value.length < 2) {
        return false;
    } else {

        return true;
    }
}

function blurElem(elem, helpElem, text, compFunc) {
    elem.onblur = function() {
        console.log('red')
        if (!compFunc(elem)) {
            elem.style.borderColor = "red";
            helpElem.style.color = "red";
            helpElem.innerHTML = text;
        } else {
            elem.style.borderColor = "black";
            helpElem.innerHTML = "";
        }

    }
}

export function blurName(elem, helpElem) {
    blurElem(elem, helpElem, 'Минимум 2 символа', validateName)
}

export function validateLogin(elem) {
    if (elem.value.length < 6) {
        return false;
    } else {
        return true;
    }
}

export function blurLogin(elem, helpElem) {
    blurElem(elem, helpElem, 'Минимум 6 символов', validateLogin)
}

export function validateEmail(elem) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(elem.value)
}

export function blurEmail(elem, helpElem) {
    blurElem(elem, helpElem, 'В поле должен быть email', validateEmail)

}

export function validatePassword(elem) {
    const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

    return re.test(elem.value)
}

export function blurPassword(elem, helpElem) {
    blurElem(elem, helpElem, 'Пароль должет состоять из 6 символов. Должена пресуствовать одна буква латинского алфавить в верхнем и нижнем регистре, цифра и спец.символ', validatePassword)

}
export function validateSecondPassword(elem, secondElem) {
    if (elem.value !== secondElem.value) {
        return false
    } else {
        return true
    }
}

export function blurSecondPassword(elem, secondElem, helpElem) {
    elem.onblur = function() {
        console.log('SecondPassword')
        if (!validateSecondPassword(elem, secondElem)) {
            elem.style.borderColor = "red";
            helpElem.style.color = "red";
            helpElem.innerHTML = "Пароли должны совпадать";
        } else {
            elem.style.borderColor = "black";
            helpElem.innerHTML = "";
        }

    }

}