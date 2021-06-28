//CLOCK FUNCTION
function theTime() {

    const today = new Date()

    const time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2)

    document.querySelector('.timer').innerHTML = time;

    const t = setTimeout(theTime, 1000);
}

theTime()

//MESSAGE FUNCTION
const message = document.querySelector(".message")

function showMessage() {
    const date = new Date();
    let current = date.getHours();
    let boxmsg;

    if (current >= 17 && current <= 23) {
        boxmsg = "Good Evening"

    } else if (current >= 12 && current <= 16) {
        boxmsg = "Good Afternoon"

    } else if (current >= 0 && current <= 11) {
        boxmsg = "Good Morning"

    } else {
        boxmsg = "Something is not working correctly"
    }

    message.innerHTML = `${boxmsg}`


}

showMessage()