const logOutButton = document.getElementById('logOutButton');

logOutButton.onclick = async function() {
    const res = await fetch("http://formtask/logout")
    const data = await res.json();
    console.log(data)
    if (data.status == true) {
        location.replace('../view/regist.php')
    }
}