/* Функция конструктор, для подписания обьекта {elem} события убратия курсора,
    если функция проверки {compFunc} вернула false, то выводим текст {text} в
    элемент {helpElem} и окрашиваем {elem} и {helpElem} в красный,
    если функция проверки {compFunc} вернула true, то делаем цвет чёрным и
    убераем вспомогательный текст*/
function blurElem(elem, helpElem, text, compFunc) {
    elem.onblur = function() {
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

// Функция для проверки имени (длина больше 2 символов)
export function validateName(elem) {
    if (elem.value.length < 2 || validateSpace(elem) || !!elem.value.replace(/[a-zA-Z]/g, '').length) {
        return false;
    } else {

        return true;
    }
}


export function blurName(elem, helpElem) {
    blurElem(elem, helpElem, 'Минимум 2 символа. Без пробелов и спецсимволов', validateName)
}

// Функция для проверки логина (длина больше 6 символов)
export function validateLogin(elem) {
    if (elem.value.length < 6 || validateSpace(elem)) {
        return false;
    } else {
        return true;
    }
}

export function blurLogin(elem, helpElem) {
    blurElem(elem, helpElem, 'Минимум 6 символов, без пробелов', validateLogin)
}

// Функция для проверки e-mail 
export function validateEmail(elem) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(elem.value)
}

export function blurEmail(elem, helpElem) {
    blurElem(elem, helpElem, 'В поле должен быть email', validateEmail)

}

// Функция для проверки пароля (Должен состоять из 6 символов, из букв и цивр)
export function validatePassword(elem) {
    const re = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}/g;

    return re.test(elem.value) && !validateSpace(elem) && !validateSymbol(elem)
}
export function validateSymbol(elem) {
    let str = elem.value
    return !!str.replace(/[0-9a-zA-Z]/g, '').length
}

export function blurPassword(elem, helpElem) {
    blurElem(elem, helpElem, 'Пароль должет состоять из 6 символов. Из букв и цифр, без пробелов и спецсимволов.', validatePassword)

}

export function validateSpace(elem) {
    const re = /\s/g

    return re.test(elem.value)
}
// Функция для проверки второго пароля (пароли толжны совпадать)
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