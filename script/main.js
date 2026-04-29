const bikeScene = document.getElementById("bikeScene");
const gardenScene = document.getElementById("gardenScene");
const letterScene = document.getElementById("letterScene");

const grid = document.getElementById("flowerGrid");
const letterContent = document.getElementById("letterContent");
const backBtn = document.getElementById("backBtn");

let opened = new Set();

// 🌸 FLOWER DATA (with labels)
const flowers = [
  { key: "whiteRose", emoji: "🤍", label: "White Rose" },
  { key: "rose", emoji: "🌹", label: "Rose" },
  { key: "tulip", emoji: "🌷", label: "Tulip" },
  { key: "daisy", emoji: "🌼", label: "Daisy" },
  { key: "lavender", emoji: "💜", label: "Lavender" },
  { key: "cherryBlossom", emoji: "🌸", label: "Cherry Blossom" },
  { key: "lily", emoji: "🤍", label: "Lily" },
  { key: "bluebell", emoji: "🔵", label: "Bluebell" },
  { key: "hibiscus", emoji: "🌺", label: "Hibiscus" },
  { key: "peony", emoji: "🌷", label: "Peony" },
  { key: "orchid", emoji: "🌸", label: "Orchid" },
  { key: "marigold", emoji: "🟡", label: "Marigold" },
  { key: "sunflower", emoji: "🌻", label: "Sunflower (FINAL)" }
];

// 🚲 BIKE ANIMATION
document.querySelector(".bike").addEventListener("click", () => {
  const bike = document.querySelector(".bike");
  bike.classList.add("moving");
  
  setTimeout(() => {
    bikeScene.style.opacity = "0";
    setTimeout(() => {
      bikeScene.classList.remove("active");
      gardenScene.classList.add("active");
      gardenScene.style.opacity = "0";
      setTimeout(() => {
        gardenScene.style.opacity = "1";
        gardenScene.style.transition = "opacity 0.5s ease";
      }, 100);
    }, 500);
  }, 3000);
});

// 🌸 CREATE FLOWERS
flowers.forEach((flower, index) => {
  const f = document.createElement("div");
  f.classList.add("flower");
  
  f.innerHTML = `
    <div class="flower-emoji">${flower.emoji}</div>
    <div class="flower-label">${flower.label}</div>
  `;

  if (index === 12) {
    f.classList.add("locked", "glow");
  }

  f.onclick = () => openFlower(index);

  grid.appendChild(f);
});

// 💌 LETTERS (PASTE YOUR TEXT HERE)
const letters = {
  whiteRose: `<h2>🌸 1ST MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 1</p>`,
  rose: `<h2>🌹 2ND MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 2</p>`,
  tulip: `<h2>🌷 3RD MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 3</p>`,
  daisy: `<h2>🌼 4TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 4</p>`,
  lavender: `<h2>💜 5TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 5</p>`,
  cherryBlossom: `<h2>🌸 6TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 6</p>`,
  lily: `<h2>🤍 7TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 7</p>`,
  bluebell: `<h2>🔵 8TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 8</p>`,
  hibiscus: `<h2>🌺 9TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 9</p>`,
  peony: `<h2>🌷 10TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 10</p>`,
  orchid: `<h2>🌸 11TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 11</p>`,
  marigold: `<h2>🟡 12TH MONTH</h2><p>PASTE YOUR TEXT HERE FOR MONTH 12</p>`,
  sunflower: `
    <h2 style="text-align:center;">🌻 ONE YEAR TOGETHER! 🎉</h2>
    <p><strong>PASTE YOUR FINAL SPECIAL MESSAGE HERE</strong></p>
    <p style="margin-top:20px; font-size:14px; opacity:0.8; text-align:center;">
      💕 Unlocked after opening all 12 flowers 💕
    </p>
  `
};

// 🌸 OPEN FLOWER
function openFlower(index) {
  if (index === 12 && opened.size < 12) {
    // Better feedback
    const sunflower = document.querySelectorAll(".flower")[12];
    sunflower.style.animation = "shake 0.5s ease-in-out";
    setTimeout(() => sunflower.style.animation = "", 500);
    return;
  }

  opened.add(index);

  // Smooth scene transition
  gardenScene.style.opacity = "0";
  setTimeout(() => {
    bikeScene.classList.remove("active");
    gardenScene.classList.remove("active");
    letterScene.classList.add("active");
    letterContent.innerHTML = letters[flowers[index].key];
  }, 300);

  // Unlock sunflower if all flowers opened
  if (opened.size === 12) {
    const sunflower = document.querySelectorAll(".flower")[12];
    sunflower.classList.remove("locked");
    sunflower.style.animation = "unlockGlow 1s ease-in-out";
  }
}

// 🔙 BACK BUTTON
backBtn.onclick = () => {
  letterScene.classList.remove("active");
  gardenScene.classList.add("active");
  gardenScene.style.opacity = "0";
  setTimeout(() => {
    gardenScene.style.opacity = "1";
  }, 100);
};

// Add shake animation for locked flower
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  @keyframes unlockGlow {
    0% { transform: scale(1); box-shadow: 0 8px 25px rgba(0,0,0,0.15); }
    50% { transform: scale(1.2); box-shadow: 0 0 40px rgba(255,215,0,0.8); }
    100% { transform: scale(1); box-shadow: 0 12px 35px rgba(0,0,0,0.25), 0 0 30px rgba(255,215,0,0.5); }
  }
`;
document.head.appendChild(style);
