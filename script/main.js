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

  0: `our four first month was super special, babbyyyy. it honestly felt like something I only used to pray for before I sleep poo and suddenly, it was real in front of me. everything felt so soft, so new, so magical in a way I can’t even explain poo. we started healing ourselves from the pain and traumas that our past relationships and experiences gave us. slowly, without even forcing it, we started learning what love really feels like when it’s not one-sided or painful. we started learning each other’s likes, dislikes, habits, and little things that make us who we are. and honestly, babbyyyy, it felt amazing. it made me realize that this is what it feels like to be loved by someone who actually loves you back the same way. I couldn’t even wrap my head around it at first. I kept thinking maybe I’m just dreaming maybe this isn’t real maybe I’ll wake up and it’s gone. but it wasn’t a dream poo. we proved to each other that we are worthy of love. and somehow, that made everything even more beautiful and even more romantic poo because it wasn’t perfect love, it was real love that we both chose.`,

  1: `our 2nd month was still superrr surreal, babbyyyy. it felt like we were slowly stepping deeper into each other’s world we were learning things we didn’t even realize we needed to understand about love poo, this was the month we started learning each other’s love language. I slowly understood that your favorite is physical touch, and at first I honestly didn’t know how important that really was. I never really had a “favorite” love language before. I didn’t even know what mine was properly until you started showing me what love can feel like in different ways. I used to think words of affirmation were enough na po. like if you say “I love you,” that should already be clear. but you changed that for me in the most beautiful way po, babbyyyy, you taught me that love is not just something you hear it’s something you feel din po. in the way you hold someone’s hand, in the way you stay close, in the way your presence palang po can calm someone down without saying anything and when I started combining both words and touch, I realized that it doesn’t just feel like love anymore. it feels like safety. like home. like I can finally breathe properly after holding everything in for so long.`,

  2: `our 3rd month was probably one of my favvv months, babbyyyy. even though we still had small misunderstandings, it didn’t feel like the end of the world anymore because we were starting to learn how to come back to each other this was the month where my birthday got properly celebrated again, this was the month where we didn’t just talk about love we showed it in actions po. we went on little dates, we made time for each other, and we even gave each other the crafts that matagal na nating ginagawa and carried so much effort and meaning, babbyyyy. it felt like we were trying to fix things with love instead of pride. and that made everything feel warmer and babbyyyy, I will never forget that you gave me your first ever scrapbook for meee. your very first one that you made for me. and until now, I still have it. I still keep it safe like it’s something fragile and precious because it is pooo talagaa, every page, every detail, every effort you put into it felt like a piece of your heart that you decided to give to me. and I don’t think you understand how much that means to me. I will always treasure it, not just as something you made, but as proof that I am loved by you in all ways poo.`,

  3: `our 4th month felt a little more steady, babbyyyy. it wasn’t as overwhelming as before, but it wasn’t boring either. it was that quiet kind of love where you start feeling more comfortable just by being with each other poo, we were learning each other more deeply now, not just the sweet sides but also the confusing parts, the emotional parts, the parts that take patience to understand, there were still misunderstandings here and there, but something changed this time we didn’t let them stay long. we tried to fix things, even when it was hard to talk. and that effort alone meant a lot to me poo it felt like we were slowly growing into something stronger without even noticing it.`,

  4: `well, as far as I remember kase nga po, may short term memory loss me HAHAHAHAHA, our 5th month felt soft lang po, babbyyyy. not always loud or exciting, but peaceful in a way that slowly became important to me poo, it was the kind of month where I started realizing that love doesn’t always need big moments and sometimesss it’s just you, my babbyyyy being there staying choosing someone even in ordinary days poo. I started appreciating our conversations more, our random talks, the way you check on me, the way we laugh at small things. it made me realize that even the simplest moments become special when it’s with you.`,

  5: `our 6th month was one of the hardest chapters, babbyyyy, well as far as I can remember din po on the hearts on your calendar, babbyyyy, this was the month where everything started feeling heavy. misunderstandings became more painful, emotions became harder to explain, and sometimes even simple things felt complicated. there were moments where I didn’t know how to reach you properly, and I’m sorry for the times I probably made you feel alone in that. but even in that mess, I never stopped caring about you. even when things felt distant, even when silence was louder than words, my feelings for you didn’t disappear. they were still there just hurting quietly poo, this month didn’t break my love for you, babbyyyy, it tested it and somehow, even in the broken parts, we were still both holding on and that's something that I'll always be proud of po for us, mahallll`,

  6: `our 7th month was heavy parinn po, babbyyyy. it felt like we were both tired emotionally, like we were carrying things we didn’t fully know how to fix yet, there were lotss of things po that were left unsaid, and things we were scared to talk about because we didn’t want to hurt each other more. but that silence also hurt in its own way, I know that po because I know my babbyyyy a lott, I knoww uss po and I think this was the month where I realized love isn’t always loud po. sometimes it’s just two people trying not to let go even when they don’t fully understand each other in the moment, it was just us learning how to love palang po, babbyyyy and even if it was painful, I still saw you. I still saw the love you were trying to give, even if it wasn’t perfect. we were still trying, babbyyyy even when it was hard poo`,

  7: `IT'S DECEMBER, BABBBYYYYYY! our 8th month felt different pooo, softer and quieter, like we were slowly learning how to breathe again after everything these past few monthss, this was the month we started healing ourselves from the pain we caused each other in the past months. it wasn’t instant. it wasn’t easy. but there was effort and I can see ittt just like alwayss poo and that mattered a lot to me, babbyyyy, we started talking more gently, understanding more deeply, and trying to rebuild the parts that were broken without rushing it, and babbyyyy, this month is so special to me because it was our first Christmas and New Year together!!!! after everything we went through, we still got to share those moments. and it made me realize that maybe, despite the pain, we were still meant to find our way back to something good po hehe`,

  8: `9th month felt like a slow reset po like the new year babbyyyy, not perfect, not fully healed, but better than before hehe, we were still learning how to move forward without hurting each others through our words, and learning what to not to do to not hurt each otherr po. it felt like we were trying to understand each other again, but this time with more patience. there were still moments of doubt po, but there were also moments where I felt the biggest of hopes again po, babbyyyy like we can reallyy fix this if we stayed patient and listened to each other and understand each other step by step because at the end of the day, we're always the one who we can lean on and have rest to po hehe`,

  9: `February felt really special in a different way, babbyyyy especially because this was our first Valentine’s Day together po hehe, I don’t think I’ll ever forget that moment, knowing that out of everyone, I’m the one you chose to celebrate that kind of day with. it wasn’t just about the date itself, it was about the feeling that I get to experience something so meaningful with you for the first time po hehe, and babbyyyy hindi ko makakalimutan yung efforts mo that month poo. the time, the planning, the little details, the way you made sure everything felt special for us. through our dates, through the gifts you gave, through the way you expressed your love I could feel how genuine everything was poo, hindi nga me po makakasapaw to everything you did ehh, like no matter what I do po, it still wouldn’t match the effort and love you showed me. but even then, I appreciated it more than I can explain, babbyyyy, you made me feel so loved in ways that stayed with me even after that day passed. it wasn’t just a Valentine’s celebration, it became a memory I’ll always keep. and that’s when I realized even more, babbyyyy that your love isn’t just words. it’s effort, it’s action, it’s the way you make me feel important without even asking for anything in return and I'm super lucky to be that someone who you give those efforts po and I'll never take any of those for granted, babbyyyy`,

  10: `Andaming nangyari sa March, babbyyyy, hindi ko na alam kung anong isusulat ko dito HAHAHAHAHA, well all I can remember was this was one of the most stressful times for me in Senior High School po. I was superrr overwhelmed, tired, and honestly close to breaking down because of schoolworks and pressure and ikaww namann, you were there for me in a way I will never forget poo, you helped me calm down when my mind was too full. you listened when I was stressed. you encouraged me when I felt like I couldn’t finish anything anymore. you made things feel lighter just by being there and most importantly, you supported me a lot of times, babbyyyy, I couldn't honestly get my NCII if it wasn't for youu poo. I don’t think I thanked you enough for that, babbyyyy. but I really couldn’t have handled everything the same way without you poo, this month you didn’t just show me love poo you supported me. and that means everything to me po and that by far is the most highest form of love I could everr receive from you, babbbyyyyy, you never even hesitated to help me po with my projects even if you're crowded na rin po sa school, you're reallyy the best, babbyyyy, words can't describe how thankful I am po for that but I always am po, babbyyyyy`,

  11: `12 MONTHS, BABBBYYYYYY, 12 months that we’ve been together poooo, 12 months of loving, learning, breaking, healing, and choosing each other over and over again, can you believe that poo? we went through so many emotions together. there were days that felt like heaven, and days that felt like we might lose each other. but somehow, even through all of that, we’re still here and honestly po that thought alone wanna makee me cryyy, we never let everything stop us po, not even our misunderstandings and we're still togetherrr, and I think that’s what makes this real poo, we didn’t just survive a year we grew through it poo, we changed because of it. we learned how to love in a way that isn’t always easy, but still worth it, and babbyyyy, if I had to go through every single month again just to still end up loving you like this I would without hesitation poo, well I know it might sound a bit dramatic po but I'll still do it po because at the end of it all, it was never just about time, it was about you, babbyyyy, it was about uss, learning and staying through our highest and our lowest, we have a lot of schedules na po this April and all I wantt po is that matutuloyy po us on every schedule that we havee, I'm superr exciteddd to learn and survive this month with you again, babbyyyy, just like we alwayss do po hehe.`,

  12: `Haiii, babbyyyy if you're reading this, that means you've probably reached the last and final and most special flower in this website hehe, I didn't know what else I could give you on our 1st year so I made this, I know it's not fancy but it's something that I made from my heart, I hope you still appreciate it and I promise that I'll make more of these for youu soon, I may not be able to reflect your scrapbook arts physically but I'll still do it digitally hehe. Every flowers are special, just like you, they have their own messages, specifically on the months that we've overcome together, I want you to read them all and tell me what you think hehe, have fun, babbyyyy koo, I hope this somehow made you smile :). Looking back on our 1 year together, babbbyyyyy, it was a lott poo talagaa, I've witnessed how we handled each situation po and I'm always proud of us po. Parang kahapon lang talaga, babbyyyy, parang kahapon lang when we were sitting sa benches sa school, giving you our first ever bracelet, parang kahapon lang when we had our first date, parang kahapon lang when we told each other our favorite color, foods and everything, and parang kahapon lang when we sat sa beach, and I'm proposing to you, not knowing the life we had in the future I loved that kind of thrill, babbyyyy, the feeling that we both don't know what lies in the future but the fact that we're both ready to face it makes it much more assuring, that will also happen po on our next year and every following years ahead of us, babbyyyy, we might not know what yhe future has in store for us but one thing's for sure, you'll always be the one who'll I'll end up calling "mahal", you're always the one where I'll go home to and you're always the one I'll choose, no one could ever love me just like you do and I wanna feel that love pa po on our following years or much better, for forever, I'm always thankful po kay God because he answered my prayer, well honestly babbyyyy, I still couldn't erase on my head what happened throughout our 1st year po hehe, all the kiligs that we gave each other, all the random things that we shared together and all the memories that we've made, if I had a one favorite moment on our 1st year, that would be the part where I got to know you because at that part, I have found my true love, the one who'll take care of me, love me and support me gently without hesitation, you're the best, babbyyyy, no other words can describe how lucky and thankful I am to you, all I can say is, mahal na mahall ko ikaww palagi and I'll always show that to you, mahalll koo.`

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
