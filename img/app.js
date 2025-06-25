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































































sh1 = document.getElementById("sh1");
coins = document.getElementById("coins");

if (typeof (Storage) !== "undefined") {
    if (coins) {
        document.getElementById("coins").innerHTML = localStorage.bs;
        console.log(`         
            #  #               ##   #                  #     #                
            ## #              #  #  #                  #                      
            ## #   ##         #     ###    ##    ###  ###   ##    ###    ###  
            # ##  #  #        #     #  #  # ##  #  #   #     #    #  #  #  #  
            # ##  #  #        #  #  #  #  ##    # ##   #     #    #  #   ##   
            #  #   ##          ##   #  #   ##    # #    ##  ###   #  #  #     
                                                                         ###  

        `);
    }
}


click = document.getElementById("rickroll");
shit = document.getElementById("shit");

if (shit) {
    setTimeout(async () => {
        shit.innerHTML = "HELP";
    }, 25000)
}

if (click) {
    click.addEventListener("click", function () {
        if (localStorage.ach1 == "true") return;
        document.getElementById("achieve-text2").innerHTML = "Not a Rick Roll";
        document.getElementById("ach1").style.animation = "ach 4s ease";
        localStorage.ach1 = "true";
        localStorage.bs = Number(localStorage.bs) + 10;
    });
}


function gohome() {
    window.location.replace("index.html")
}


function clik() {
    em = document.getElementById("em");
    if (em.value == "") {
        return;
    }
    else {
        if (localStorage.discord !== "") {
            em.value = "";
            alert("Epik Games ID has already been created.")
            return;
        }
        localStorage.discord = em.value;
        const request = new XMLHttpRequest();
        request.open("POST", "##");

        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: "Epik Games",
            content: `The user ${localStorage.discord} has initiated their EPIK GAMES account!`
        }

        request.send(JSON.stringify(params));
        alert("Epik Games account initiated. Please check server.")
        em.value = "";

    }
}

let clicked = false;

if (sh1) {
    sh1.addEventListener("click", function () {
        if (clicked == true || localStorage.c1 == "True") return;
        if (localStorage.c1 == "False") {
            localStorage.bs = Number(localStorage.bs) + 5;
        }
        const request = new XMLHttpRequest();
        request.open("POST", "##");

        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: "JF",
            content: "THANK YOU FOR HELPING ME, I'm an employee here at Epik Games and I need some serious help right now. Idk how you reached that specific link for a 404 code BUT IM GLAD YOU DID. I have automated this message to display whenever you click the glitched button, but only once per person though. Well regardless, I'll try to hack into every encryption code for all the abandoned websites during the development of this version of Epik Games. For a fact, I know that all these websites have a 6-character hash which gets added to the root hash for every other branch-site. Most of them arent supported on a mobile device but some are so i hope you keep that in mind. The one I'm working on currently is `e5FbD2` maybe you'll find something there."
        }

        request.send(JSON.stringify(params));
        clicked = true;
        localStorage.c1 = "True";
    })
}


const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;


gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 75%",
        end: "bottom 25%",
        markers: false,
        onEnter: function () {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
});

function update(cursorPointer) {
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let isInLeft =
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue =
            (cursorPointer - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue}px)`;
    });

}

update(0)

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;


    update(e.clientX);
});




