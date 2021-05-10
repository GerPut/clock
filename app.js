
function theTime() {

    const today = new Date()

    const time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2)

    document.querySelector('.timer').innerHTML = time;

    const t = setTimeout(theTime, 1000);
}

theTime()

//("0" + today.getSeconds()).slice(-2)