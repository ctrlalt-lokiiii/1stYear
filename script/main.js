const bikeScene = document.getElementById("bikeScene");
const gardenScene = document.getElementById("gardenScene");
const letterScene = document.getElementById("letterScene");

const grid = document.getElementById("flowerGrid");
const letterContent = document.getElementById("letterContent");
const backBtn = document.getElementById("backBtn");

let opened = new Set();

// 🌸 ORDER
const keys = [
  "whiteRose","rose","tulip","daisy","lavender",
  "cherryBlossom","lily","bluebell","hibiscus",
  "peony","orchid","marigold","sunflower"
];

// 🌸 EMOJIS
const emojis = ["🤍","🌹","🌷","🌼","💜","🌸","🤍","🔵","🌺","🌷","🌸","🟡","🌻"];

// 🚲 CLICK BIKE
document.querySelector(".bike").addEventListener("click", () => {
  document.querySelector(".bike").style.transform =
    "translateX(300px)";

  setTimeout(()=>{
    bikeScene.classList.remove("active");
    gardenScene.classList.add("active");
  },3000);
});

// 🌸 CREATE FLOWERS
keys.forEach((key, index)=>{
  const f = document.createElement("div");
  f.classList.add("flower");
  f.innerText = emojis[index];

  if(index === 12){
    f.classList.add("locked","glow");
  }

  f.onclick = () => openFlower(index);

  grid.appendChild(f);
});

// 💌 LETTERS (PUT YOUR TEXT HERE)
const letters = {
  whiteRose: `<h2>1ST MONTH</h2><p>PASTE YOUR TEXT</p>`,
  rose: `<h2>2ND MONTH</h2><p>PASTE YOUR TEXT</p>`,
  tulip: `<h2>3RD MONTH</h2><p>PASTE YOUR TEXT</p>`,
  daisy: `<h2>4TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  lavender: `<h2>5TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  cherryBlossom: `<h2>6TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  lily: `<h2>7TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  bluebell: `<h2>8TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  hibiscus: `<h2>9TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  peony: `<h2>10TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  orchid: `<h2>11TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  marigold: `<h2>12TH MONTH</h2><p>PASTE YOUR TEXT</p>`,
  sunflower: `
    <h2 style="text-align:center;">🌻 Final Message</h2>
    <p>PASTE FINAL MESSAGE</p>
    <p style="margin-top:20px; font-size:12px; opacity:0.6;">
    🔒 Unlock after opening all flowers
    </p>
  `
};

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

  letterContent.innerHTML = letters[keys[index]];

  if(opened.size === 12){
    document.querySelectorAll(".flower")[12].classList.remove("locked");
  }
}

// 🔙 BACK
backBtn.onclick = ()=>{
  letterScene.classList.remove("active");
  gardenScene.classList.add("active");
};
