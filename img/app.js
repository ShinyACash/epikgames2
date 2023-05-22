
if (typeof (Storage) !== "undefined") {
    if (localStorage.bs) {
        document.getElementById("coins").innerHTML = localStorage.bs;
    }
    else {
        localStorage.bs = 0;
    }
}


click = document.getElementById("rickroll");

if (click) {
    click.addEventListener("click", function () {
        if (localStorage.ach1 == "true") return;
        document.getElementById("achieve-text2").innerHTML = "Not a Rick Roll";
        document.getElementById("ach1").style.animation = "ach 4s ease";
        localStorage.ach1 = "true";
    });
}





function clik() {
    em = document.getElementById("em");
    if (em.value == "") {
        return;
    }
    else {
        localStorage.email = em.value;
        Email.send({
            Host: "smtp.sendgrid.net",
            Username: "",
            Password: "",
            To: `${localStorage.email}`,
            From: "noreplyepikgames2@gmail.com",
            Subject: "Hello from Epik!",
            Body: "Phew! This message has reached you after travelling the waves! Regardless, I'm an employee at epik games AND I NEED TO GET OUT OF HERE, WOULD YOU PLEASE HELP ME IM DYING HERE. Hint here.",
        })
            .then(function (message) {
                alert("mail sent successfully")
            });
        em.value = "";

    }
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

