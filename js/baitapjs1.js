var x = 0;
var a = 9;
var b = 9;
var y = 5;
function timer() {
    var abc = document.getElementById("min");
    abc.innerText = a;
    var xyz = document.getElementById("sec");
    xyz.innerText = b;
    var egh = document.getElementById("first");
    egh.innerText = x;
    var ikm = document.getElementById("second");
    ikm.innerText = y;
    b--;
    if(b == -1){
        b = 9;
        y--;
    }
    if(y == -1){
        a--;
        y = 5;
    }
    if(a < 0){
        clearInterval(bt);
    }
}
var bt = setInterval(timer, 1000);