const bikeScene = document.getElementById("bikeScene");
const gardenScene = document.getElementById("gardenScene");
const letterScene = document.getElementById("letterScene");

const grid = document.getElementById("flowerGrid");
const letterContent = document.getElementById("letterContent");
const backBtn = document.getElementById("backBtn");

let opened = new Set();

// 🌸 FLOWER ORDER (UPDATED)
const keys = [
  "whiteRose","rose","tulip","daisy","lavender",
  "cherryBlossom","lily","bluebell","hibiscus",
  "peony","orchid","marigold","sunflower"
];

// 🌸 FLOWER EMOJIS
const emojis = ["🤍","🌹","🌷","🌼","💜","🌸","🤍","🔵","🌺","🌷","🌸","🟡","🌻"];

// 🚲 BIKE CLICK
bikeScene.addEventListener("click", () => {
  document.querySelector(".bike").style.transform = "translateX(200px)";
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

// 💌 LETTERS (PASTE YOUR FULL TEXTS HERE)
const letters = {
  whiteRose: `<h2>1ST MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  rose: `<h2>2ND MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  tulip: `<h2>3RD MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  daisy: `<h2>4TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  lavender: `<h2>5TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  cherryBlossom: `<h2>6TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  lily: `<h2>7TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  bluebell: `<h2>8TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  hibiscus: `<h2>9TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  peony: `<h2>10TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  orchid: `<h2>11TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  marigold: `<h2>12TH MONTH</h2><p>PASTE YOUR FULL TEXT HERE</p>`,
  sunflower: `
    <h2 style="text-align:center;">🌻 Final Message</h2>
    <p>PASTE YOUR FINAL MESSAGE HERE</p>
    <p style="margin-top:20px; font-size:12px; opacity:0.6;">
    🔒 This flower only bloomed after you opened all the others.
    </p>
  `
};

// 🌼 OPEN FLOWER
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

  // 🔓 UNLOCK FINAL
  if(opened.size === 12){
    document.querySelectorAll(".flower")[12].classList.remove("locked");
  }
}

// 🔙 BACK
backBtn.onclick = ()=>{
  letterScene.classList.remove("active");
  gardenScene.classList.add("active");
};    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
