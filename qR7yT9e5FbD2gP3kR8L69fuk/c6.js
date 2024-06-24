if (localStorage.c6 == "False") {
    if (localStorage.c5 == "False") {
        alert("How tf did you get here? no cheating bruh go back.");
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    }
    else if (localStorage.c5 == "True") {
        localStorage.bs = Number(localStorage.bs) + 5;
        localStorage.c6 = "True";
    }
}