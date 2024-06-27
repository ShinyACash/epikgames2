if (localStorage.c12 == "False") {
    if (localStorage.c11 == "False") {
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
        localStorage.c12 = "True";
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1253349982778556489/qhjERMkwzHs9-tKEblxv7LeVic2R--82EJBfWmcTT9ubffxk93SuxWX1UQOWvpLaqx0m");

        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: "BTB",
            content: "I CAN FEEL IT, we (me and jf) do not have access to our employee IDs which means that we cant access the site our ID's either. It's definitely the next one user! We're almost there!"
        }
        request.send(JSON.stringify(params));

    }
}
