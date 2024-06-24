if (localStorage.c8 == "False") {
    if (localStorage.c7 == "False") {
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
        localStorage.c8 = "True";
    }
}