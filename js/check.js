check = async() => {
    const res = await fetch("http://formtask/check")
    const data = await res.json()
    console.log(data)
    console.log(data.status)
    if (data.status === false) {
        location.replace('../view/regist.php')
    }
    // if (location.pathname !== '/index.php') {
    //     location.replace('../index.php')
    // }
}
check()