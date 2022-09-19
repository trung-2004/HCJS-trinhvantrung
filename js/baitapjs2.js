var f = 100;
var bt;
var at;
var ct;
function quay1() {
    var x = document.getElementById("quat");
    x.style.transform ='rotate('+f+'deg)'; // xoay tròn
    f+= 2;
}
function so1() {
    at = setInterval(quay1, 1);
}
function quay2() {
 var x = document.getElementById("quat");
 x.style.transform = 'rotate('+f+'deg)';
 f+=8;
}
function so2() {
    bt = setInterval(quay2, 1);
}
function quay3() {
    var x = document.getElementById("quat");
    x.style.transform = 'rotate('+f+'deg)';
    f+=14;
}
function so3() {
    ct = setInterval(quay3, 1);
}
function tat() {
    clearInterval(at);
    clearInterval(bt);
    clearInterval(ct);
}