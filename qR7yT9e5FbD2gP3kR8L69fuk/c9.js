if (localStorage.c9 == "False") {
    if (localStorage.c8 == "False") {
        alert("bro can you stop cheating bruh go back.")
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    else {
        if (localStorage.doubler == 1) {
            localStorage.bs = Number(localStorage.bs) + 10;
        }
        else {
            localStorage.bs = Number(localStorage.bs) + 5;
        }
        localStorage.c9 = "True";
    }
}

var d = new Date();
var currtime = d.getHours() * 100 + d.getMinutes();

if (currtime == 2111 || currtime == 911) {
    document.getElementById("sumn").innerHTML = "you noob."
}