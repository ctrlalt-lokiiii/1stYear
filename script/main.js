const bikeScene = document.getElementById("bikeScene");
const gardenScene = document.getElementById("gardenScene");
const letterScene = document.getElementById("letterScene");
const welcomeScene = document.getElementById("welcomeScene");
const buildingsContainer = document.getElementById("buildingsContainer");
const cottageContainer = document.getElementById("cottageContainer");

const grid = document.getElementById("flowerGrid");
const letterContent = document.getElementById("letterContent");
const backBtn = document.getElementById("backBtn");

let opened = new Set();
let journeyActive = false;

// 🌸 FLOWER DATA
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
  { key: "sunflower", emoji: "🌻", label: "Sunflower" }
];

// 💨 CREATE WIND & LEAVES
function createParticles() {
  // Wind curves already in HTML
  // Add leaf particles
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      leaf.innerHTML = '🍃';
      leaf.style.top = `${20 + i * 15}%`;
      leaf.style.animationDelay = `${i * 1.2}s`;
      leaf.style.animationDuration = `${6 + i * 0.5}s`;
      document.getElementById("bikeScene").appendChild(leaf);
      
      setTimeout(() => leaf.remove(), 8000);
    }, i * 1000);
  }
}

// 🏢 CREATE BUILDINGS
function createBuildings() {
  const buildings = [
    '<div class="building building1"></div>',
    '<div class="building building2"></div>',
    '<div class="building building3"></div>'
  ];
  
  buildingsContainer.innerHTML = buildings.join('');
}

// 🏠 CREATE COTTAGE
function createCottage() {
  cottageContainer.innerHTML = `
    <div class="cottage">
      <div class="cottage-roof"></div>
      <div class="cottage-body">
        <div class="cottage-window left"></div>
        <div class="cottage-window right"></div>
        <div class="cottage-door"></div>
      </div>
    </div>
  `;
}

// 🚲 COMPLETE JOURNEY SEQUENCE
document.querySelector(".bike").addEventListener("click", () => {
  if (journeyActive) return;
  journeyActive = true;
  
  const bike = document.querySelector(".bike");
  
  // Start particles
  createParticles();
  
  // Phase 1: Bike moves right (1.5s)
  bike.classList.add("moving-right");
  
  setTimeout(() => {
    // Phase 2: Recenters + buildings (2s total journey)
    bike.classList.remove("moving-right");
    bike.classList.add("moving-center");
    createBuildings();
  }, 1500);
  
  setTimeout(() => {
    // Phase 3: Cottage appears + bike enters
    createCottage();
  }, 2500);
  
  setTimeout(() => {
    // Phase 4: Bike fades into cottage
    bike.classList.add("fade-out");
  }, 3500);
  
  setTimeout(() => {
    // Phase 5: Fade to black + welcome
    bikeScene.style.transition = "opacity 1s ease";
    bikeScene.style.opacity = "0";
    
    setTimeout(() => {
      bikeScene.classList.remove("active");
      welcomeScene.classList.add("active");
    }, 1000);
    
    setTimeout(() => {
      // Phase 6: Fade to garden
      welcomeScene.style.opacity = "0";
      setTimeout(() => {
        welcomeScene.classList.remove("active");
        gardenScene.classList.add("active");
        createFlowers();
      }, 500);
    }, 4000);
  }, 4500);
});

// 🌸 CREATE FLOWERS
function createFlowers() {
  flowers.forEach((flower, index) => {
    const f = document.createElement("div");
    f.classList.add("flower");
    
    f.innerHTML = `
      <div class="flower-circle">${flower.emoji}</div>
      <div class="flower-label">${flower.label}</div>
    `;
    
    if (index === 12) {
      f.classList.add("locked");
      f.innerHTML += '<div class="sunflower-note">Unlocked after all 12 flowers</div>';
    }
    
    f.onclick = () => openFlower(index);
    grid.appendChild(f);
  });
}

// 💌 LETTERS - PASTE YOUR MESSAGES HERE
const letters = {
  whiteRose: `<h2>🌸 1ST MONTH</h2><p>Your beautiful message for month 1...</p>`,
  rose: `<h2>🌹 2ND MONTH</h2><p>Your beautiful message for month 2...</p>`,
  tulip: `<h2>🌷 3RD MONTH</h2><p>Your beautiful message for month 3...</p>`,
  daisy: `<h2>🌼 4TH MONTH</h2><p>Your beautiful message for month 4...</p>`,
  lavender: `<h2>💜 5TH MONTH</h2><p>Your beautiful message for month 5...</p>`,
  cherryBlossom: `<h2>🌸 6TH MONTH</h2><p>Your beautiful message for month 6...</p>`,
  lily: `<h2>🤍 7TH MONTH</h2><p>Your beautiful message for month 7...</p>`,
  bluebell: `<h2>🔵 8TH MONTH</h2><p>Your beautiful message for month 8...</p>`,
  hibiscus: `<h2>🌺 9TH MONTH</h2><p>Your beautiful message for month 9...</p>`,
  peony: `<h2>🌷 10TH MONTH</h2><p>Your beautiful message for month 10...</p>`,
  orchid: `<h2>🌸 11TH MONTH</h2><p>Your beautiful message for month 11...</p>`,
  marigold: `<h2>🟡 12TH MONTH</h2><p>Your beautiful message for month 12...</p>`,
  sunflower: `
    <h2 style="text-align:center; color:#D4A017;">🌻 ONE YEAR ANNIVERSARY! 🎉</h2>
    <p style="font-size:18px; font-weight:bold; text-align:center;">
      Your FINAL special message here...
    </p>
    <p style="margin-top:25px; font-size:14px; opacity:0.9; text-align:center;">
      💕 Thank you for this amazing year 💕
    </p>
  `
};

// 🌸 FLOWER INTERACTION
function openFlower(index) {
  if (index === 12 && opened.size < 12) {
    // Shake animation for locked sunflower
    const sunflower = document.querySelectorAll(".flower")[12];
    sunflower.style.animation = "shake 0.6s ease-in-out";
    setTimeout(() => {
      sunflower.style.animation = "";
    }, 600);
    return;
  }
  
  opened.add(index);
  
  // Smooth transition to letter
  gardenScene.style.opacity = "0";
  setTimeout(() => {
    gardenScene.classList.remove("active");
    letterScene.classList.add("active");
    letterContent.innerHTML = letters[flowers[index].key];
  }, 400);
  
  // Unlock sunflower
  if (opened.size === 12) {
    const sunflower = document.querySelectorAll(".flower")[12];
    sunflower.classList.remove("locked");
    sunflower.querySelector(".sunflower-note").textContent = "🌟 ALL UNLOCKED! 🌟";
    sunflower.style.animation = "unlockCelebrate 1s ease-in-out";
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

// Add shake & celebrate animations
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    25% { transform: translateX(-8px) rotate(-2deg); }
    75% { transform: translateX(8px) rotate(2deg); }
  }
  @keyframes unlockCelebrate {
    0% { transform: scale(1); }
    50% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
  .flower {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .flower:hover {
    transform: translateY(-15px) !important;
  }
`;
document.head.appendChild(style);

// Initialize particles loop
setInterval(createParticles, 10000);
