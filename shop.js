
/*


M""""""""M                                        MM'""""'YMM dP                           dP   .d8888ba  
Mmmm  mmmM                                        M' .mmm. `M 88                           88   `8'   `8b 
MMMM  MMMM 88d888b. dP    dP 88d888b. .d8888b.    M  MMMMMooM 88d888b. .d8888b. .d8888b. d8888P      .d8' 
MMMM  MMMM 88'  `88 88    88 88'  `88 88'  `88    M  MMMMMMMM 88'  `88 88ooood8 88'  `88   88      d8P'   
MMMM  MMMM 88       88.  .88 88    88 88.  .88    M. `MMM' .M 88    88 88.  ... 88.  .88   88      ""     
MMMM  MMMM dP       `8888P88 dP    dP `88888P8    MM.     .dM dP    dP `88888P' `88888P8   dP      oo     
MMMMMMMMMM               .88                      MMMMMMMMMMM                                             
                     d8888P                                                                               

 ___  ____  _  _   ___  ____    _  _  _____  __  __    ____   ____  ____     ___  _   _  _____  _    _    __  __  ____    ____  _   _  ____  ___    ____    __    ____   
/ __)(_  _)( \( ) / __)( ___)  ( \/ )(  _  )(  )(  )  (  _ \ (_  _)(  _ \   / __)( )_( )(  _  )( \/\/ )  (  )(  )(  _ \  (_  _)( )_( )(_  _)/ __)  ( ___)  /__\  (  _ \  
\__ \ _)(_  )  ( ( (__  )__)    \  /  )(_)(  )(__)(    )(_) ) _)(_  )(_) )  \__ \ ) _ (  )(_)(  )    (    )(__)(  )___/    )(   ) _ (  _)(_ \__ \   )__)  /(__)\  )   / ()
(___/(____)(_)\_) \___)(____)   (__) (_____)(______)  (____/ (____)(____/   (___/(_) (_)(_____)(__/\__)  (______)(__)     (__) (_) (_)(____)(___/  (__)  (__)(__)(_)\_) / 
   _    _  _   _  _  _    _  _  _____  ____    ___  ____   ___  _  _    __  __  ____      __    ___      __      ____   ____  _  _  ____  __    _____  ____  ____  ____   
  ( \/\/ )( )_( )( \/ )  ( \( )(  _  )(_  _)  / __)(_  _) / __)( \( )  (  )(  )(  _ \    /__\  / __)    /__\    (  _ \ ( ___)( \/ )( ___)(  )  (  _  )(  _ \( ___)(  _ \  
   )    (  ) _ (  \  /    )  (  )(_)(   )(    \__ \ _)(_ ( (_-. )  (    )(__)(  )___/   /(__)\ \__ \   /(__)\    )(_) ) )__)  \  /  )__)  )(__  )(_)(  )___/ )__)  )   /  
  (__/\__)(_) (_) (__)   (_)\_)(_____) (__)   (___/(____) \___/(_)\_)  (______)(__)    (__)(__)(___/  (__)(__)  (____/ (____)  \/  (____)(____)(_____)(__)  (____)(_)\_)  
   __    ____    ____  ____  ____  _  _     ___    __    __  __  ____  ___  ___ 
  /__\  (_  _)  ( ___)(  _ \(_  _)( )/ )   / __)  /__\  (  \/  )( ___)/ __)(__ )
 /(__)\   )(     )__)  )___/ _)(_  )  (   ( (_-. /(__)\  )    (  )__) \__ \ (_/ 
(__)(__) (__)   (____)(__)  (____)(_)\_)   \___/(__)(__)(_/\/\_)(____)(___/ (_) 


We are noticing quite the naughty behaviour you are showing to see all the hints present and gotta say you are quite the naughty one. 
Well you are viewing the script in your dev tools or in a new window so gotta say you really are a pussy who is desperate to cheat in this simple game.
Since you already are so desperate, why not switch sides and help me make them suffer instead??? lmso.



*/




































































function hint() {
    if (localStorage.bs) {
        if (Number(localStorage.bs) >= 15) {
            localStorage.pay = "true";
            localStorage.hint_pay = "True";
            window.location.replace("purchase_hint.html");
        }
        else {
            document.getElementById("notif").style.right = `2vw`;
            setTimeout(async () => {
                document.getElementById("notif").style.right = `-20vw`;
            }, 3000);
        }
    }
}

function doubler() {
    if (localStorage.bs) {
        if (Number(localStorage.bs) >= 50) {
            localStorage.pay = "true";
            localStorage.doubler_pay = "True";
            window.location.replace("purchase_doubler.html");
        }
        else {
            document.getElementById("notif").style.right = `2vw`;
            setTimeout(async () => {
                document.getElementById("notif").style.right = `-20vw`;
            }, 3000);
        }
    }
}

function dildo() {
    if (localStorage.bs) {
        if (Number(localStorage.bs) >= 10) {
            localStorage.pay = "true";
            localStorage.dildo_pay = "True";
            window.location.replace("purchase_dildo.html");
        }
        else {
            document.getElementById("notif").style.right = `2vw`;
            setTimeout(async () => {
                document.getElementById("notif").style.right = `-20vw`;
            }, 3000);
        }
    }
}

function dildole() {
    if (localStorage.bs) {
        if (Number(localStorage.bs) >= 25) {
            localStorage.pay = "true";
            localStorage.dildole_pay = "True";
            window.location.replace("purchase_ledildo.html");
        }
        else {
            document.getElementById("notif").style.right = `2vw`;
            setTimeout(async () => {
                document.getElementById("notif").style.right = `-20vw`;
            }, 3000);
        }
    }
}

function crypt() {
    if (localStorage.bs) {
        if (Number(localStorage.bs) >= 100) {
            localStorage.pay = "true";
            localStorage.crypt_pay = "True";
            window.location.replace("purchase_crypt.html");
        }
        else {
            document.getElementById("notif").style.right = `2vw`;
            setTimeout(async () => {
                document.getElementById("notif").style.right = `-20vw`;
            }, 3000);
        }
    }
}

function hintpay() {
    const request = new XMLHttpRequest();
    request.open("POST", "##");

    request.setRequestHeader('Content-type', 'application/json');
    if (localStorage.c1 == "False") {
        alert("Nice try but we are not a fool <3");
        window.location.replace("shop.html");
        return;
    }

    else if (localStorage.c1 == "True" && localStorage.c2 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "are you really that dumb? just enter the code into the link bruh."`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c2 == "True" && localStorage.c3 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "hMM maybe you could use the painting to decrypt a message. whats it called again? ste- ste-what?"`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c3 == "True" && localStorage.c4 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "Perhaps the blinking lights will take me to the code itself, maybe its morse? The dev team really loves encrypting stuff for no reason. but why arent they stopping me from doing this?"`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c4 == "True" && localStorage.c5 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "Maybe the dashes on the top could specify a number... the dev team has an upper hand on these things sadly."`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c5 == "True" && localStorage.c6 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "The colours could add up to a 6 character hash. The dev team seems to be helping me?? idk what their motive is."`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c6 == "True" && localStorage.c7 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "I have tried to put the hash in a text file which has been hijacked by the epik games dev team, i typed the characters needed for the next hash to help you but they changed it to a code. maybe the numbers correspond to the characters from the decrypted message?"`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c7 == "True" && localStorage.c8 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "Maybe a smaller device could help you get to the clues of what you're supposed to do. and after that, do what you did best in the last one."`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c8 == "True" && localStorage.c9 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "Maybe if i try to look into the website in a deeper way, i could figure out the hash from within the site. maybe count the divs? and then do math."`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c9 == "True" && localStorage.c10 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "Maybe the numbers on screen and the title could lead me to the code."`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c10 == "True" && localStorage.c11 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "perhaps i should look for the wikipedia page from where this is taken."`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c11 == "True" && localStorage.c12 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "find a button! its the button that'll help you!"`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c12 == "True" && localStorage.c13 == "False") {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just claimed a hint! Message from JF: "find the right decode of the hash in the code of the site!"`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 15;
            localStorage.hint_pay = "False";
            localStorage.pay = 'false';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);

    }
    else if (localStorage.c13 == "True") {
        alert("Sorry but there's no more hints left from this point on!");
        const params = {
            username: "Epik Games",
            content: `${localStorage.discord} has just claimed a hint! Message from JF: This is a test"`
        }
        request.send(JSON.stringify(params));
        window.location.replace("shop.html");
    }

    console.log("payment success.");
    
}

function doublerpay() {
    const request = new XMLHttpRequest();
    request.open("POST", "##");

    request.setRequestHeader('Content-type', 'application/json');


    if (localStorage.doubler == 0) {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just bought a B$ DOUBLER!! DAMN, nice investment dude! You are def smarter than the other ones participating!`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 50;
            localStorage.doubler_pay = "False";
            localStorage.pay = 'false';
            localStorage.doubler = 1;
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);
    }

    else {
        alert("Bro you already have this, how many do you need?? go back don waste ma time.");
        window.location.replace("shop.html");
    }

}

function dildopay() {
    const request = new XMLHttpRequest();
    request.open("POST", "##");

    request.setRequestHeader('Content-type', 'application/json');


    if (localStorage.dildo == 0) {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just bought a dildo! What a naughty and horny person. But hey, thanks for your patronage!`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 10;
            localStorage.dildo_pay = "False";
            localStorage.pay = 'false';
            localStorage.dildo = 1;
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);
    }

    else {
        alert("Bro you already have this, how many do you need?? go back don waste ma time.");
        window.location.replace("shop.html");
    }

}

function dildolepay() {
    const request = new XMLHttpRequest();
    request.open("POST", "##");

    request.setRequestHeader('Content-type', 'application/json');


    if (localStorage.leg_dildo == 0) {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just bought the legendary LEGACY EDITION DILDO! It has been added to your collection! Check out the achievements tab to see it.`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 25;
            localStorage.dildole_pay = "False";
            localStorage.pay = 'false';
            localStorage.leg_dildo = 1;
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);
    }

    else {
        alert("Bro you already have this, how many do you need?? go back don waste ma time.");
        window.location.replace("shop.html");
    }

}

function cryptpay() {
    const request = new XMLHttpRequest();
    request.open("POST", "##");

    request.setRequestHeader('Content-type', 'application/json');


    if (localStorage.cryptkeybought == 'false') {

        document.getElementById("paybutton").style.opacity = 0;
        document.getElementById("wr").setAttribute("style", "opacity: 1;");
        setTimeout(function () {
            const params = {
                username: "Epik Games",
                content: `${localStorage.discord} has just bought the CRYPT KEY???? also, everyone needs to buy the crypt key for them to actually access the content after. The crypt key is: secretbitch@akadan`
            }
            request.send(JSON.stringify(params));
            console.log("Paid");
            localStorage.bs -= 100;
            localStorage.crypt_pay = "False";
            localStorage.pay = 'false';
            localStorage.cryptkeybought = 'true';
            setTimeout(function () {
                window.location.replace("shop.html");
            }, 2000);
        }, 1000);
    }

    else {
        alert("Bro you already have this, how many do you need?? go back don waste ma time.");
        window.location.replace("shop.html");
    }

}

