// ===============================
// SCREEN CONTROL
// ===============================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");
}


// ===============================
// QUESTION 1
// ===============================

function amazingClicked() {

    showScreen("reply1");

    setTimeout(() => {

        showScreen("question2");

    }, 5000);
}


// ===============================
// MOVE WRONG ANSWER
// ===============================

function moveButton(button) {

    const padding = 20;

    const maxX =
        window.innerWidth -
        button.offsetWidth -
        padding;

    const maxY =
        window.innerHeight -
        button.offsetHeight -
        padding;

    const x =
        Math.max(
            padding,
            Math.random() * maxX
        );

    const y =
        Math.max(
            padding,
            Math.random() * maxY
        );

    button.style.position = "fixed";

    button.style.left = x + "px";

    button.style.top = y + "px";
}


// ===============================
// QUESTION 1 WRONG BUTTONS
// ===============================

document.querySelectorAll(".runaway1").forEach(button => {

    // Computer
    button.addEventListener("mouseenter", () => {

        moveButton(button);

    });


    // Phone
    button.addEventListener("touchstart", (event) => {

        event.preventDefault();

        moveButton(button);

    });

});


// ===============================
// DATE QUESTION
// ===============================

function checkDate() {

    const input =
        document
        .getElementById("dateAnswer")
        .value
        .toLowerCase()
        .replace(/[^0-9a-z]/g, "");


    if (
        input === "17may2026" ||
        input === "17052026" ||
        input === "17may"
    ) {

        showScreen("reply2");


        setTimeout(() => {

            startTrustQuestion();

        }, 5000);

    }

    else {

        alert(
            "Hmmmm 😏 Try again... you should remember this date ❤️"
        );

    }

}


// ===============================
// TRUST QUESTION
// ===============================

let trustTimer;


function startTrustQuestion() {

    showScreen("question3");


    // Automatically continue after 10 seconds

    trustTimer = setTimeout(() => {

        showScreen("reply3");


        setTimeout(() => {

            startSnapQuestion();

        }, 10000);

    }, 10000);

}


// ===============================
// "I DON'T KNOW"
// ===============================

function dontKnowClicked() {

    // Stop automatic timer

    clearTimeout(trustTimer);


    showScreen("reply3");


    setTimeout(() => {

        startSnapQuestion();

    }, 10000);

}


// ===============================
// TRUST WRONG ANSWERS
// ===============================

document.querySelectorAll(".runaway2").forEach(button => {


    button.addEventListener("mouseenter", () => {

        moveButton(button);

    });


    button.addEventListener("touchstart", (event) => {

        event.preventDefault();

        moveButton(button);

    });

});


// ===============================
// SNAP QUESTION
// ===============================

let snapTimer;


function startSnapQuestion() {

    showScreen("question4");


    /*
       Wrong answers stay for 5 seconds.
       Then they disappear.
    */

    snapTimer = setTimeout(() => {

        document.querySelector(".snap1").style.display = "none";

        document.querySelector(".snap2").style.display = "none";

    }, 5000);

}


// ===============================
// SNAP WRONG ANSWERS
// ===============================

document.querySelectorAll(".runaway3").forEach(button => {


    button.addEventListener("mouseenter", () => {

        moveButton(button);

    });


    button.addEventListener("touchstart", (event) => {

        event.preventDefault();

        moveButton(button);

    });

});


// ===============================
// FINAL ANSWER
// ===============================

function snapSoon() {

    clearTimeout(snapTimer);

    showScreen("final");

}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


// Create hearts

setInterval(createHeart, 700);