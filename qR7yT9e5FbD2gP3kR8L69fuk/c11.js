if (localStorage.c11 == "False") {
    if (localStorage.c10 == "False") {
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
        localStorage.c11 = "True";
    }
}

var audio = document.getElementById("music");
var kirb = document.getElementById("sumn");
let isplaying = false;
function playMusic() {
    if (isplaying) return;
    isplaying = true;
    kirb.style.opacity = 1;
    audio.play();
}
