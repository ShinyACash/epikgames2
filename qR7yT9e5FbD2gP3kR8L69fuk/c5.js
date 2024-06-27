if (localStorage.c5 == "False") {
    if (localStorage.c4 == "False") {
        alert("How tf did you get here? no cheating bruh go back.");
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    }
    else if (localStorage.c4 == "True") {
        localStorage.bs = Number(localStorage.bs) + 5;
        localStorage.c5 = "True";
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1253349982778556489/qhjERMkwzHs9-tKEblxv7LeVic2R--82EJBfWmcTT9ubffxk93SuxWX1UQOWvpLaqx0m");

        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: "BTB",
            content: "HEY! its Bot the Bot here, my system has completely died but it wont be destroyed until i delete my employee ID. The employee id holds every information about the person working and it also handles their systems and even their LIFE. Please, i need your help to delete my employee ID so that i can finally rest in peace. This is an automated message and I'll be brodcasting it over the pages which can send it out to users...i hope at least one of you guys helps me out."
        }

        request.send(JSON.stringify(params));

    }
}