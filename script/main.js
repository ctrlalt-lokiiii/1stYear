const bikeScene = document.getElementById("bikeScene");
const gardenScene = document.getElementById("gardenScene");
const letterScene = document.getElementById("letterScene");

const grid = document.getElementById("flowerGrid");
const letterContent = document.getElementById("letterContent");
const backBtn = document.getElementById("backBtn");

let opened = new Set();

const keys = [
  "White Rose","Rose","Tulip","Daisy","Lavender",
  "Cherry Blossom","Lily","Bluebell","Hibiscus",
  "Peony","Orchid","Marigold","Sunflower"
];

const emojis = ["🤍","🌹","🌷","🌼","💜","🌸","🤍","🔵","🌺","🌷","🌸","🟡","🌻"];

/* 🚲 BIKE CLICK */
document.querySelector(".bike").addEventListener("click", () => {
  const bike = document.querySelector(".bike");
  const road = document.querySelector(".road");

  // start road animation
  road.classList.add("moving-road");

  // move bike to right + fade
  bike.style.transform = "translateX(150%) scaleX(-1)";
  bike.style.opacity = "0";

  setTimeout(() => {
    bikeScene.classList.remove("active");
    gardenScene.classList.add("active");
  }, 2000);
});

/* 🌸 CREATE FLOWERS */
keys.forEach((name, index)=>{
  const f = document.createElement("div");
  f.classList.add("flower");

  const icon = document.createElement("div");
  icon.classList.add("flower-icon");
  icon.innerText = emojis[index];

  const label = document.createElement("div");
  label.classList.add("flower-name");
  label.innerText = name;

  f.appendChild(icon);
  f.appendChild(label);

  if(index === 12){
    f.classList.add("locked");

    const unlockText = document.createElement("div");
    unlockText.classList.add("unlock-text");
    unlockText.innerText = "Unlocks after 12 flowers";
    f.appendChild(unlockText);
  }

  f.onclick = () => openFlower(index);

  grid.appendChild(f);
});

/* 💌 LETTER PLACEHOLDER */
const letters = {};

/* 🌸 OPEN FLOWER */
function openFlower(index){

  if(index === 12 && opened.size < 12){
    alert("Open all flowers first 🌸");
    return;
  }

  opened.add(index);

  bikeScene.classList.remove("active");
  gardenScene.classList.remove("active");
  letterScene.classList.add("active");

  letterContent.innerHTML = letters[index] || "<p>Paste your letter here</p>";

  if(opened.size === 12){
    const finalFlower = document.querySelectorAll(".flower")[12];
    finalFlower.classList.remove("locked");
    finalFlower.classList.add("glow"); // 🌻 glow when unlocked
  }
}

/* 🔙 BACK */
backBtn.onclick = ()=>{
  letterScene.classList.remove("active");
  gardenScene.classList.add("active");
};
