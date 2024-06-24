sh2 = document.getElementById("sh2");
terminal = document.getElementById("terminal");
let _clicks = 0;

if (localStorage.c2 == "False") {
    alert("How the fuck did you show up here? Go back to Epik Games!");
    window.location.replace("index.html");
}

if (sh2) {
    sh2.addEventListener("click", function () {
        if (localStorage.c3 == "False") {
            localStorage.bs = Number(localStorage.bs) + 5;
            localStorage.c3 = "True";
            _clicks++;
        }
        else {
            _clicks++;
            if (_clicks == 2) {
                document.getElementById("L").innerHTML = "dumb";
            }
            if (_clicks == 5) {
                document.getElementById("L").innerHTML = "bro stop.";
            }
            if (_clicks == 10) {
                document.getElementById("L").innerHTML = "still going?";
            }
            if (_clicks >= 25) {
                document.getElementById("L").innerHTML = "damn ok";
                if (localStorage.ach2 == "false") {
                    document.getElementById("achieve-text2").innerHTML = "Greed";
                    document.getElementById("ach1").style.animation = "ach 4s ease";
                    localStorage.ach2 = "true";
                    localStorage.bs = Number(localStorage.bs) + 10;
                }
            }
        }
    })
}

if (terminal) {
    if (localStorage.c3 == "False") {
        alert("How the fuck did you show up here? Go back to Epik Games!");
        window.location.replace("index.html");
    }
    if (localStorage.c4 == "False") {
        localStorage.bs = Number(localStorage.bs) + 5;
        localStorage.c4 = "True";
    }
}
