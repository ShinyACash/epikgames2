var ac1 = document.getElementById("ach1");
var ac1_desc = document.getElementById("ach1_desc");
var ac2 = document.getElementById("ach2");
var ac2_desc = document.getElementById("ach2_desc");
var ac3 = document.getElementById("ach3");
var ac3_desc = document.getElementById("ach3_desc");
var ac4 = document.getElementById("ach4");
var ac4_desc = document.getElementById("ach4_desc");
var ac5 = document.getElementById("ach5");
var ac5_desc = document.getElementById("ach5_desc");
var ac6 = document.getElementById("ach6");
var ac6_desc = document.getElementById("ach6_desc");
var ac7 = document.getElementById("ach7");
var ac7_desc = document.getElementById("ach7_desc");

if (localStorage.ach1 == 'true') {
    ac1.innerHTML = "Not a Rickroll";
    ac1_desc.innerHTML = "You clicked the button and it wasnt a rickroll! i've had enough rickrolls in my day!";
}

if (localStorage.ach2 == 'true') {
    ac2.innerHTML = "Greed";
    ac2_desc.innerHTML = "You really just want more and more money don't you?";
}

if (localStorage.ach3 == 'true') {
    ac3.innerHTML = "Nostalgia";
    ac3_desc.innerHTML = "Ah the good old Epik Games in its glorious and stone cold days...it was a living hell for everyone.";
}

if (localStorage.ach4 == 'true') {
    ac4.innerHTML = "The End?";
    ac4_desc.innerHTML = "Perhaps all you need to do now is destroy the fuckery of epik games.";
}

if (localStorage.ach5 == 'true') {
    ac5.innerHTML = "The End";
    ac5_desc.innerHTML ="You freed Jonah Falcon from his suffering.";
}

if (localStorage.ach6 == 'true') {
    ac6.innerHTML = "The End btb";
    ac6_desc.innerHTML = "You freed Bot the Bot from his suffering and let it die.";
}

if (localStorage.ach7 == 'true') {
    ac7.innerHTML = "True Ending";
    ac7_desc.innerHTML = "You killed Epik Games, but at wht cost?";
}

