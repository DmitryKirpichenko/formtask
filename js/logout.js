const logOutButton = document.getElementById('logOutButton');

console.log('1')

logOutButton.onclick = async function() {
    const res = await fetch("http://formtask/logout")
    const data = await res.json();
    console.log(data)
    if (data.status == true) {
        location.replace('../view/regist.php')
    }
}