import { SERVER_PATH } from "../constants/constants.js"

/* Фунция для отправуи запроса на сервер для проверки кук и сесии*/
let check = async() => {
    const res = await fetch(SERVER_PATH + 'check.php')
    const data = await res.json()
        // Если не авторизированы то переход на регистрацию
    if (data.status === false && location.pathname === '/formtask/view/welcom.php') {
        location.replace('../index.php')
    }
    //Если авторизированы и не находимся на welcom.php, то переходим туда
    if (data.status === true && location.pathname !== '/formtask/view/welcom.php' && location.pathname !== '/formtask/view/login.php') {
        location.replace('./view/welcom.php')
    }
    if (data.status === true && location.pathname == '/formtask/view/login.php') {
        location.replace('./welcom.php')
    }
}
check()