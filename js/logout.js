import { SERVER_PATH } from "../constants/constants.js";
const logOutButton = document.getElementById('logOutButton');

// Запрос на сервер для удаления кук и сессии (для выхода)
logOutButton.onclick = async function() {
    const res = await fetch(SERVER_PATH + 'logout.php')
    const data = await res.json();
    console.log(data)
    if (data.status == true) {
        location.reload()
    }
}