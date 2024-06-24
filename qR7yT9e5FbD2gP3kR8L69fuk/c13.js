if (localStorage.c13 == "False") {
    if (localStorage.c12 == "False") {
        alert("bro can you stop cheating bruh go back.")
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    else {
        if (localStorage.doubler == 1) {
            localStorage.bs = Number(localStorage.bs) + 20;
        }
        else {
            localStorage.bs = Number(localStorage.bs) + 10;
        }
        localStorage.c13 = "True";
    }
}

if (localStorage.ach4 == "false") {
    document.getElementById("achieve-text2").innerHTML = "The End?";
    document.getElementById("ach1").style.animation = "ach 4s ease";
    localStorage.ach4 = "true";
    if (localStorage.doubler == 1) {
        localStorage.bs = Number(localStorage.bs) + 20;
    }
    else {
        localStorage.bs = Number(localStorage.bs) + 10;
    }
}

