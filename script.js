function openGift() {
    document.getElementById("gift-box").style.display = "none";
    
    let explosionSound = document.getElementById("explosion-sound");
    explosionSound.play();

    let photo = document.getElementById("photo");
    photo.style.display = "block";

    setTimeout(startCrashEffect, 2000);
}

function startCrashEffect() {
    document.body.classList.add("glitch");

    setInterval(() => {
        let spamDiv = document.createElement("div");
        spamDiv.style.position = "absolute";
        spamDiv.style.left = Math.random() * window.innerWidth + "px";
        spamDiv.style.top = Math.random() * window.innerHeight + "px";
        spamDiv.style.color = "red";
        spamDiv.style.fontSize = "20px";
        spamDiv.innerText = "ERROR!";
        document.body.appendChild(spamDiv);
    }, 50);

    setInterval(() => {
        console.log("Overloading script...");
    }, 10);
}