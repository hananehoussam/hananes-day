
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("buttonsArea");
const card = document.getElementById("card");
const hint = document.getElementById("hint");

let attempts = 0;

const messages = [
    "Tu es sûre, Hanane ? 🥺",
    "Réfléchis encore ! ❤️",
    "Allez, choisis Oui ! 💗",
    "Tu veux vraiment me dire non ? 😭",
    "Hanane, regarde le bouton Oui ! 👀",
    "S'il te plaît, choisis Oui ! 🥹",
    "Je sais que tu m'aimes ! 😂"
];

// Déplacer NON légèrement dans la zone blanche
function moveNoButton() {

    attempts++;

    const areaWidth = area.clientWidth;
    const areaHeight = area.clientHeight;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Position du bouton OUI
    const yesX = yesBtn.offsetLeft;
    const yesY = yesBtn.offsetTop;

    // Position actuelle de NON
    const currentX = noBtn.offsetLeft;
    const currentY = noBtn.offsetTop;

    // Petits déplacements aléatoires
    let newX = currentX + (Math.random() - 0.5) * 100;
    let newY = currentY + (Math.random() - 0.5) * 45;

    // Garder le bouton dans la zone blanche
    newX = Math.max(0, Math.min(newX, areaWidth - buttonWidth));
    newY = Math.max(0, Math.min(newY, areaHeight - buttonHeight));

    // Éviter qu'il recouvre complètement OUI
    const distance = Math.hypot(
        newX - yesX,
        newY - yesY
    );

    if (distance < 80) {
        newX = currentX + (currentX < yesX ? -35 : 35);
        newX = Math.max(0, Math.min(newX, areaWidth - buttonWidth));
    }

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
    noBtn.style.transform = "none";

    hint.textContent = messages[
        Math.min(attempts - 1, messages.length - 1)
    ];
}

// Ordinateur
noBtn.addEventListener("mouseenter", moveNoButton);

// Téléphone
noBtn.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    moveNoButton();
});

// Cœurs flottants
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const emojis = ["❤️", "💕", "💗", "💖", "🌸", "🌷"];

    heart.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 450);

// Bouton OUI
yesBtn.addEventListener("click", () => {

    card.innerHTML = `
        <div style="font-size:65px;">🥹💗</div>

        <p class="small-title">
            LA MEILLEURE REINE DU MONDE
        </p>

        <h1 class="success-title">
            Hanane !! ❤️
        </h1>

        <p class="success-message">
            Je savais que tu m'aimais ! 😍
            <br><br>
            Tu es ma Queen pour toujours ! 👑
            <br>
            Tu mérites tout le bonheur du monde.
            <br><br>
            Je t'offre les plus belles fleurs,
            parce que tu es ma plus belle fleur. 🌷💐
        </p>

        <div style="font-size:50px;">
            🌹🌷💐🌸✨
        </div>

        <button class="restart-btn" onclick="location.reload()">
            Encore une fois ? ❤️
        </button>
    `;

    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 80);
    }
});
