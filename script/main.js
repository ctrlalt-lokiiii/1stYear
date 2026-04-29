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
let journeyStarted = false;
let gameState = 'waiting'; // waiting, bikeMoving, buildings, cottage, fadeBlack, showWelcome, garden

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

// 🚲 COMPLETE JOURNEY SEQUENCE
document.querySelector(".bike").addEventListener("click", () => {
  if (journeyStarted || gameState !== 'waiting') return;
  journeyStarted = true;
  gameState = 'bikeMoving';
  
  const bike = document.querySelector(".bike");
  const startText = document.getElementById("startText");
  
  // Hide start text
  startText.style.opacity = '0';
  
  // Step 1: Bike moves right
  bike.classList.add("move-right");
  
  setTimeout(() => {
    gameState = 'buildings';
    bike.classList.remove("move-right");
    bike.classList.add("center-moving");
    createBuildings();
  }, 1500);
  
  setTimeout(() => {
    gameState = 'cottage';
    createCottage();
  }, 2500);
  
  // 🚀 FIXED: Trigger fade sequence when cottage arrives
  setTimeout(() => {
    gameState = 'fadeBlack';
    triggerFadeSequence();
  }, 4500);
});

function createBuildings() {
  buildingsContainer.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const building = document.createElement('div');
    building.className = 'building';
    buildingsContainer.appendChild(building);
  }
}

function createCottage() {
  cottageContainer.innerHTML = '';
  const cottage = document.createElement('div');
  cottage.className = 'cottage';
  cottage.innerHTML = `
    <div class="cottage-roof"></div>
    <div class="cottage-body">
      <div class="cottage-window left"></div>
      <div class="cottage-window right"></div>
      <div class="cottage-door"></div>
    </div>
  `;
  cottageContainer.appendChild(cottage);
}

// 🚀 FIXED: Complete fade sequence
function triggerFadeSequence() {
  // Step 1: Fade bike scene to black
  document.body.style.transition = 'opacity 2s ease-out';
  document.body.style.opacity = '0';
  
  setTimeout(() => {
    // Step 2: Show welcome scene
    bikeScene.classList.remove('active');
    welcomeScene.classList.add('active');
    gameState = 'showWelcome';
    
    setTimeout(() => {
      // Step 3: Welcome fades out, show garden
      welcomeScene.classList.remove('active');
      gardenScene.classList.add('active');
      document.body.style.opacity = '1';
      gameState = 'garden';
      initGarden();
    }, 4000); // Welcome shows for 4 seconds
  }, 2000); // Black fade takes 2 seconds
}

// 🌸 GARDEN INIT
function initGarden() {
  grid.innerHTML = '';
  flowers.forEach((flower, index) => {
    const flowerDiv = document.createElement('div');
    flowerDiv.className = `flower ${opened.has(flower.key) ? '' : 'locked'}`;
    flowerDiv.innerHTML = `
      <div class="flower-circle">${flower.emoji}</div>
      <div class="flower-label">${flower.label}</div>
      ${flower.key === 'sunflower' ? '<div class="sunflower-note">Our 1st year together 🌻</div>' : ''}
    `;
    flowerDiv.addEventListener('click', () => openFlower(flower, index));
    grid.appendChild(flowerDiv);
  });
}

function openFlower(flower, index) {
  if (opened.has(flower.key)) return;
  
  opened.add(flower.key);
  gardenScene.classList.remove('active');
  letterScene.classList.add('active');
  
  const messages = [
    "Our first year has been magical 🌸",
    "Every moment with you feels like a dream 💕",
    "Thank you for filling my life with love 🌹",
    "Here's to many more beautiful years together 💜",
    "You make every day feel like spring 🌷",
    "My heart blooms wherever you are 🌸",
    "One year down, forever to go 💍",
    "You're my favorite kind of magic ✨",
    "Love grows stronger every day 🌻",
    "Thank you for being my everything 💖",
    "Our love story is just beginning 📖",
    "You make my world so much brighter ☀️",
    "One year of the best memories ever 🥰"
  ];
  
  letterContent.innerHTML = `
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="font-size: 48px; margin-bottom: 20px;">${flower.emoji}</div>
      <h2>${flower.label}</h2>
    </div>
    <p style="font-style: italic; text-align: center;">${messages[index]}</p>
    <div style="text-align: center; margin-top: 30px; font-size: 14px; color: #8B4513;">
      With all my love 💕
    </div>
  `;
}

backBtn.addEventListener('click', () => {
  letterScene.classList.remove('active');
  if (opened.size === flowers.length) {
    // All flowers opened - show completion
    letterContent.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 60px; margin: 30px 0;">🌈✨</div>
        <h2>You found all the flowers! 🌸</h2>
        <p>Our love story continues...</p>
        <div style="font-size: 14px; color: #8B4513; margin-top: 30px;">
          Happy 1st Anniversary 💕
        </div>
      </div>
    `;
  } else {
    initGarden();
    gardenScene.classList.add('active');
  }
});
