if (localStorage.pay == "false") {
    window.location.replace("shop.html");
}
document.getElementById("balance").innerHTML = `B$ ${localStorage.bs}`;
if (localStorage.hint_pay == 'True') {
    document.getElementById("subhead3cont").innerHTML = `B$ ${localStorage.bs - 15}`;
}
else if (localStorage.dildo_pay == 'True') {
    document.getElementById("subhead3cont").innerHTML = `B$ ${localStorage.bs - 10}`;
}
else if (localStorage.doubler_pay == 'True') {
    document.getElementById("subhead3cont").innerHTML = `B$ ${localStorage.bs - 50}`;
}
else if (localStorage.dildole_pay == 'True') {
    document.getElementById("subhead3cont").innerHTML = `B$ ${localStorage.bs - 25}`;
}
else if (localStorage.crypt_pay == 'True') {
    document.getElementById("subhead3cont").innerHTML = `B$ ${localStorage.bs - 100}`;
}

function cancel() {
    localStorage.pay = 'false';
    localStorage.hint_pay = "False";
    localStorage.dildo_pay = "False";
    localStorage.doubler_pay = "False";
    localStorage.crypt_pay = "False";
    localStorage.dildole_pay = "False";
    window.location.replace("shop.html");
}