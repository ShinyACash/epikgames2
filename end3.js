if (localStorage.ach7 == "false") {
    document.getElementById("achieve-text2").innerHTML = "True Ending";
    document.getElementById("ach1").style.animation = "ach 4s ease";
    localStorage.ach7 = "true";

}

if (localStorage.end3 == 0) {
    localStorage.end3 = 1;
    const request = new XMLHttpRequest();
    request.open("POST", "##");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Epik Games",
        content: "You there user, will pay for this. We'll keep coming back...I, always come back."
    }

    request.send(JSON.stringify(params));
}
