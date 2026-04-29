const bikeScene = document.getElementById("bikeScene");
const gardenScene = document.getElementById("gardenScene");
const letterScene = document.getElementById("letterScene");
const welcomeScene = document.getElementById("welcomeScene");

const grid = document.getElementById("flowerGrid");
const letterContent = document.getElementById("letterContent");
const backBtn = document.getElementById("backBtn");

let opened = new Set();
let journeyStarted = false;

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

// 🚲 JOURNEY SEQUENCE
document.querySelector(".bike").addEventListener("click", () => {
  if (journeyStarted) return;
  journeyStarted = true;
  
  const bike = document.querySelector(".bike");
  
  // Step 1: Bike moves right
  bike.classList.add("move-right");
  
  setTimeout(() => {
    // Step 2: Recenters + buildings appear
    bike.classList.remove("move-right");
    bike.classList.add("center-moving");
    createBuildings();
  }, 1500);
  
  setTimeout(() => {
    // Step 3: Cottage appears
    createCottage();
  }, 2500);
  
  setTimeout(()
