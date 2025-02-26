function openGift() {
    document.getElementById("gift-box").style.display = "none";
    
    let explosionSound = document.getElementById("explosion-sound");
    explosionSound.volume = 1.0;  // Pastikan volume maksimal
    explosionSound.play();        // Putar suara ledakan

    let photo = document.getElementById("photo");
    photo.style.display = "block";

    setTimeout(startCrashEffect, 2000);
}

function startCrashEffect() {
    document.body.classList.add("glitch");

    let glitchInterval = setInterval(() => {
        let glitchText = document.createElement("div");
        glitchText.style.position = "absolute";
        glitchText.style.left = Math.random() * window.innerWidth + "px";
        glitchText.style.top = Math.random() * window.innerHeight + "px";
        glitchText.style.color = "red";
        glitchText.style.fontSize = "20px";
        glitchText.innerText = "ERROR!";
        document.body.appendChild(glitchText);
    }, 10);

    setTimeout(() => {
        clearInterval(glitchInterval);
        overloadScript();
    }, 5000);
}

function overloadScript() {
    while (true) {
        console.log("Overloading script...");
    }
}
