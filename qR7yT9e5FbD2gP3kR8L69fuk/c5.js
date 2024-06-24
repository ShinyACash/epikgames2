if (localStorage.c5 == "False") {
    if (localStorage.c4 == "False") {
        alert("How tf did you get here? no cheating bruh go back.");
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    }
    else if (localStorage.c4 == "True") {
        localStorage.bs = Number(localStorage.bs) + 5;
        localStorage.c5 = "True";
    }
}