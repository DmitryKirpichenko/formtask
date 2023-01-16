import { SERVER_PATH } from "../constants/constants.js"

let check = async() => {
    const res = await fetch(SERVER_PATH + 'check.php')
    const data = await res.json()
    console.log(data)
    console.log(location.pathname)
    if (data.status === false && location.pathname === '/formtask/view/welcom.php') {
        location.replace('../index.php')
    }
    if (data.status === true && location.pathname !== '/formtask/view/welcom.php') {
        location.replace('./view/welcom.php')
    }
}
check()