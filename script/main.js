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


// 🚲 BIKE CLICK (FIXED)
window.addEventListener("load", () => {
  const bike = document.querySelector(".bike");
  const road = document.querySelector(".road");
  const wind = document.querySelector(".wind-lines");
  const dust = document.querySelector(".dust");

  if (!bike || !road) {
    console.log("Missing elements");
    return;
  }

  bike.addEventListener("click", () => {
    // start animations
    road.classList.add("moving-road");
    wind.classList.add("active");
    dust.classList.add("active");

    // move bike to right + fade
    bike.style.transform = "translateX(150%) scaleX(-1)";
    bike.style.opacity = "0";

    // go to garden
    setTimeout(() => {
      bikeScene.classList.remove("active");
      gardenScene.classList.add("active");
    }, 2000);
  });
});


// 🌸 CREATE FLOWERS
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


// 💌 LETTER PLACEHOLDER
const letters = {};


// 🌸 OPEN FLOWER
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
    finalFlower.classList.add("glow");
  }
}


// 🔙 BACK
backBtn.onclick = ()=>{
  letterScene.classList.remove("active");
  gardenScene.classList.add("active");
};
