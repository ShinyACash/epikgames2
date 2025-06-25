if (localStorage.ach5 == "false") {
    document.getElementById("achieve-text2").innerHTML = "The End";
    document.getElementById("ach1").style.animation = "ach 4s ease";
    localStorage.ach5 = "true";

}

if (localStorage.end1 == 0) {
    localStorage.end1 = 1;
    const request = new XMLHttpRequest();
    request.open("POST", "##");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "JF",
        content: "THANK YOU FOR HELPING ME DEAR USER! IM FINALLY SUCCESSFUL IN FREEING MYSELF AND DESTROYING EPIK GAMES TO FREE EVERYONE ELSE TOO!! Thank you for solving through all of it and for your patience too."
    }

    request.send(JSON.stringify(params));
}
