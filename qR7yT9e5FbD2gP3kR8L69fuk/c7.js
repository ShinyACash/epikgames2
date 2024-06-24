if (localStorage.c7 == "False") {
    if (localStorage.c6 == "False") {
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
        localStorage.c7 = "True";
    }
}

var audio = document.getElementById("aud");
let isplaying = false;
function playMusic() {
    if (isplaying) return;
    isplaying = true;
    audio.play();
}


if (window.innerWidth < window.innerHeight) {
    document.getElementById("para").innerHTML = "2 4 5 6 8 9"; 
}