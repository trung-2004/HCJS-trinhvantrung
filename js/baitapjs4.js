function hanoi() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function tphcm() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function tokyo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function bangkok() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function london() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function beijing() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function alaska() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=alaska&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function newyork() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=New york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
function berlin() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        var h1city = document.getElementById("city");
        h1city.innerText = ct;

        var tmp = data.main.temp;
        var nhietdo = document.getElementById("nhietdo");
        nhietdo.innerText = tmp;

        var humt = data.main.humidity;
        var doam = document.getElementById("doam");
        doam.innerText = humt;

        var pres = data.main.pressure;
        var apsuat = document.getElementById("apsuat");
        apsuat.innerText = pres;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("GET", url, true);
    xhttp.send();
}
