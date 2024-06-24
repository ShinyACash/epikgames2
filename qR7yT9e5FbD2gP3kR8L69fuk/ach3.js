
function achget() {
    if (localStorage.ach3 == "false") {
        document.getElementById("achieve-text2").innerHTML = "Nostalgia";
        document.getElementById("ach1").style.animation = "ach 4s ease";
        localStorage.ach3 = "true";
        if (localStorage.doubler == 1) {
            localStorage.bs = Number(localStorage.bs) + 20;
        }
        else {
            localStorage.bs = Number(localStorage.bs) + 10;
        }
    }
    else {
        alert("bitch you already claimed it, you ain getting no extra b$ nigg!")
    }
}