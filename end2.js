if (localStorage.ach6 == "false") {
    document.getElementById("achieve-text2").innerHTML = "The End btb";
    document.getElementById("ach1").style.animation = "ach 4s ease";
    localStorage.ach6 = "true";

}

if (localStorage.end2 == 0) {
    localStorage.end2 = 1;
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1253349982778556489/qhjERMkwzHs9-tKEblxv7LeVic2R--82EJBfWmcTT9ubffxk93SuxWX1UQOWvpLaqx0m");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "BTB",
        content: "Thank you for letting me free, i can finally rest in peace. Live a great life ahead dear user for its time for me to go..."
    }

    request.send(JSON.stringify(params));
}
