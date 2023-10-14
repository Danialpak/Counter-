var colors = ["White"];


function dHandler() {
    var colorChange = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorChange]
    var num = document.getElementById("boom");
    var check = num.innerHTML;
    --check;
    console.log(check);
    document.getElementById("boom").innerHTML = check;
}
dHandler()

function rHandler() {
    var num = document.getElementById("boom");
    document.getElementById("boom").innerHTML = 0;
    document.body.style.backgroundColor = "white"
}
rHandler()

function iHandler() {
    var colorChange = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorChange]
    var num = document.getElementById("boom");
    var check = num.innerHTML;
    ++check;
    document.getElementById("boom").innerHTML = check;
}
iHandler()