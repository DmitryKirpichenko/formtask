check = async() => {
    const res = await fetch("http://formtask/check")
    const data = await res.json()
    console.log(data)
    console.log('9999')
    if (data.status === false && location.pathname === '/view/welcom.php') {
        location.replace('../index.php')
    }
    if (data.status === true && location.pathname !== '/view/welcom.php') {
        location.replace('../view/welcom.php')
    }
}
check()