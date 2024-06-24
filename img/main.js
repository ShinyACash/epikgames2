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


We are noticing quite the naughty behaviour from you! 
Since you already are so desperate to cheat, why not switch sides and help me make them suffer instead??? lmso.



*/






























































var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
var pw2 = false;
let pwd = false;
let pwd2 = false;
var commands = [];

if (localStorage.c4 == "False") {
    if (localStorage.c3 == "False") {
        alert("No cheating bruh wtf?");
        window.location.replace("index.html");
    }
    else {
        localStorage.bs = localStorage.bs + 5;
        localStorage.c4 = "True"; 
    }
}



setTimeout(function () {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
    "%cYou hacked our password!",
    "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (pw) {
        let et = "*";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
        if (textarea.value === password) {
            pwd = true;
        }
        if (pwd && e.keyCode == 13) {
            loopLines(secret, "color2 margin", 120);
            command.innerHTML = "";
            textarea.value = "";
            pwd = false;
            pw = false;
            liner.classList.remove("password");
        }
        else if (e.keyCode == 13) {
            addLine("Wrong password", "error", 0);
            command.innerHTML = "";
            textarea.value = "";
            pw = false;
            liner.classList.remove("password");
        }
    }
    if (pw2) {
            let et = "*";
            let w = textarea.value.length;
            command.innerHTML = et.repeat(w);
            if (textarea.value === cryptkey) {
                pwd2 = true;
            }
            if (pwd2 && e.keyCode == 13) {
                loopLines(crypt, "color2 margin", 120);
                command.innerHTML = "";
                textarea.value = "";
                pwd2 = false;
                pw2 = false;
                liner.classList.remove("CryptKey");
            }
            else if (e.keyCode == 13) {
                addLine("Wrong Key", "error", 0);
                command.innerHTML = "";
                textarea.value = "";
                pw2 = false;
                liner.classList.remove("CryptKey");
            }
     }
     else {
            if (e.keyCode == 13) {
                commands.push(command.innerHTML);
                git = commands.length;
                addLine("user@EpikGames:~$ " + command.innerHTML, "no-animation", 0);
                commander(command.innerHTML.toLowerCase());
                command.innerHTML = "";
                textarea.value = "";
            }
            
        }
    
}

    function commander(cmd) {
        switch (cmd.toLowerCase()) {
            case "help":
                loopLines(help, "color2 margin", 80);
                break;
            case "whoami":
                loopLines(whoami, "color2 margin", 80);
                break;
            case "sudo":
                addLine("Oh no, you're not admin...", "color2", 80);
                setTimeout(function () {
                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                }, 1000);
                break;
            case "passcode":
                loopLines(passcode, "color2 margin", 80);
                break;
            case "passcode -5113":
                loopLines(passcode_e, "color2 margin", 80);
                break;
            case "secret":
                liner.classList.add("password");
                pw = true;
                break;
            case "password":
                addLine("<span class=\"inherit\"> LMSO You're joking, right? You\'re gonna have to try harder than that!</span>", "error", 100);
                break;
            case "history":
                addLine("<br>", "", 0);
                loopLines(commands, "color2", 80);
                addLine("<br>", "command", 80 * commands.length + 50);
                break;
            case "clear":
                setTimeout(function () {
                    terminal.innerHTML = '<a id="before"></a>';
                    before = document.getElementById("before");
                }, 1);
                break;
            case "banner":
                loopLines(banner, "", 80);
                break;
            case "bs":
                loopLines(bs, "color2 margin", 80);
                break;
            case "crypt":
                liner.classList.add("CryptKey");
                pw2 = true;
                break;
            default:
                addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
                break;
        }
    }




function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}