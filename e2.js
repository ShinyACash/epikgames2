if (localStorage.cryptkeybought == "false") {
    alert("no cheating fool!");
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

var textbox = document.getElementById("pass");

textbox.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        if (textbox.value == "death") {
            window.location.replace("wins.html");
        }
        else {
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
    }
});
