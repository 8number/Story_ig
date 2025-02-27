const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: 50, y: 50, size: 20 };
let virus = { x: 300, y: 300, size: 20, speed: 2 };

document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
    if (event.key === "ArrowUp") player.y -= 10;
    if (event.key === "ArrowDown") player.y += 10;
    if (event.key === "ArrowLeft") player.x -= 10;
    if (event.key === "ArrowRight") player.x += 10;
}

function update() {
    let dx = player.x - virus.x;
    let dy = player.y - virus.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 5) {
        document.getElementById("game-container").style.display = "none";
        document.getElementById("virus-warning").classList.remove("hidden");
    }

    virus.x += (dx / distance) * virus.speed;
    virus.y += (dy / distance) * virus.speed;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(player.x, player.y, player.size, player.size);

    ctx.fillStyle = "red";
    ctx.fillRect(virus.x, virus.y, virus.size, virus.size);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function showPrank() {
    document.getElementById("virus-warning").classList.add("hidden");
    document.getElementById("prank-screen").classList.remove("hidden");
}

gameLoop();