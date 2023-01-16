import { SERVER_PATH } from "../constants/constants.js"

let check = async() => {
    const res = await fetch(SERVER_PATH + 'check.php')
    const data = await res.json()
    if (data.status === false && location.pathname === '/formtask/view/welcom.php') {
        location.replace('../index.php')
    }
    if (data.status === true && location.pathname !== '/formtask/view/welcom.php' && location.pathname !== '/formtask/view/login.php') {
        location.replace('./view/welcom.php')
    }
    if (data.status === true && location.pathname == '/formtask/view/login.php') {
        location.replace('./welcom.php')
    }
}
check()