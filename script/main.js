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

  f.classList.add("locked");

const lockIcon = document.createElement("div");
lockIcon.classList.add("lock-icon");
lockIcon.innerText = "🔒";

f.appendChild(lockIcon);

  f.onclick = () => openFlower(index);

  grid.appendChild(f);
});


// 💌 LETTERS (each flower has its own message)
const letters = {

  0: `1ST MONTH 
our four first month was super special, babbyyyy. it honestly felt like something I only used to pray for before I sleep poo and suddenly, it was real in front of me. everything felt so soft, so new, so magical in a way I can’t even explain poo. we started healing ourselves from the pain and traumas that our past relationships and experiences gave us. slowly, without even forcing it, we started learning what love really feels like when it’s not one-sided or painful. we started learning each other’s likes, dislikes, habits, and little things that make us who we are. and honestly, babbyyyy, it felt amazing. it made me realize that this is what it feels like to be loved by someone who actually loves you back the same way. I couldn’t even wrap my head around it at first. I kept thinking maybe I’m just dreaming maybe this isn’t real maybe I’ll wake up and it’s gone. but it wasn’t a dream poo. we proved to each other that we are worthy of love. and somehow, that made everything even more beautiful and even more romantic poo because it wasn’t perfect love, it was real love that we both chose. `,

  1: `CHECK ROSE`,

  2: `PASTE TULIP LETTER HERE`,

  3: `PASTE DAISY LETTER HERE`,

  4: `PASTE LAVENDER LETTER HERE`,

  5: `PASTE CHERRY BLOSSOM LETTER HERE`,

  6: `PASTE LILY LETTER HERE`,

  7: `PASTE BLUEBELL LETTER HERE`,

  8: `PASTE HIBISCUS LETTER HERE`,

  9: `PASTE PEONY LETTER HERE`,

  10: `PASTE ORCHID LETTER HERE`,

  11: `PASTE MARIGOLD LETTER HERE`,

  12: `PASTE SUNFLOWER FINAL LETTER HERE`

};

const passcodes = [
  { q: "What's our monthsary?", a: "041325" },
  { q: "What's the first gift I have given to you?", a: "bracelet" },
  { q: "What's my favvv food?", a: "french fries" },
  { q: "What's my birthday?", a: "072508" },
  { q: "What's the song inspo of the first bracelet I gave you?", a: "mahika" },
  { q: "What's my first ever sport?", a: "badminton" },
  { q: "What's my favv vegetable?", a: "potato" },
  { q: "What's our favv flower?", a: "sunflower" },
  { q: "What's my favv meal to order at Durog ni Isko?", a: "sisig" },
  { q: "What was the name of the bear keychain that I gave you?", a: "milk" },
  { q: "What's my favv animal?", a: "cat" },
  { q: "What was the name of the place where we uploaded the July 7th video?", a: "marinos" },
  { q: "What shirt color did I wear when we celebrated your birthday?", a: "white" }
];

// 🌸 OPEN FLOWER
function openFlower(index){

  // if already unlocked → open directly
  if(opened.has(index)){
    showLetter(index);
    return;
  }

  showCodePopup(index);
}

function showCodePopup(index){

  const popup = document.createElement("div");
  popup.classList.add("code-popup");

 popup.innerHTML = `
  <div class="popup-box">
    <p>${passcodes[index].q}</p>

    <input type="text" id="codeInput" placeholder="Enter answer">

    <p id="errorText" class="hidden">Wrong code</p>

    <div style="display:flex; gap:10px; margin-top:10px;">
      <button id="submitBtn">Unlock</button>
      <button id="backPopupBtn">Back</button>
    </div>
  </div>
`;
const backBtn = popup.querySelector("#backPopupBtn");

backBtn.onclick = () => {
  popup.remove();
};

  document.body.appendChild(popup);

  const input = popup.querySelector("#codeInput");
  const btn = popup.querySelector("#submitBtn");
  const error = popup.querySelector("#errorText");

  btn.onclick = () => {
    const userAnswer = input.value.toLowerCase().trim();

    if(userAnswer === passcodes[index].a){
      opened.add(index);
      popup.remove();
      showLetter(index);
    } else {
      error.classList.remove("hidden");
      input.classList.add("shake");

      setTimeout(()=>{
        input.classList.remove("shake");
      }, 400);
    }
  };
}


function showLetter(index){
  bikeScene.classList.remove("active");
  gardenScene.classList.remove("active");
  letterScene.classList.add("active");

  letterContent.innerHTML = letters[index] || "<p>paste your letter here</p>";
}


// 🔙 BACK
backBtn.onclick = ()=>{
  letterScene.classList.remove("active");
  gardenScene.classList.add("active");
};
