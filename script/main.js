// 🚲 FIXED JOURNEY SEQUENCE WITH PROPER TIMING
document.querySelector(".bike").addEventListener("click", () => {
  if (journeyActive) return;
  journeyActive = true;
  
  const bike = document.querySelector(".bike");
  
  createParticles();
  
  // Phase 1: Bike moves right (1.2s)
  bike.classList.add("moving-right");
  
  setTimeout(() => {
    // Phase 2: Recenters + buildings appear
    bike.classList.remove("moving-right");
    bike.classList.add("moving-center");
    createBuildings();
  }, 1200);
  
  setTimeout(() => {
    // Phase 3: Cottage appears
    createCottage();
  }, 2200);
  
  setTimeout(() => {
    // Phase 4: Bike enters cottage
    bike.classList.add("fade-out");
  }, 3200);
  
  setTimeout(() => {
    // Phase 5: FADE TO BLACK - NOW WORKS!
    document.body.style.transition = "background 1.5s ease";
    document.body.style.background = "#000";
    
    setTimeout(() => {
      bikeScene.style.opacity = "0";
      buildingsContainer.style.opacity = "0";
      cottageContainer.style.opacity = "0";
      
      setTimeout(() => {
        // Show welcome screen
        bikeScene.classList.remove("active");
        welcomeScene.classList.add("active");
      }, 800);
    }, 700);
  }, 3700);
  
  setTimeout(() => {
    // Phase 6: Welcome -> Garden
    welcomeScene.style.transition = "opacity 1s ease";
    welcomeScene.style.opacity = "0";
    
    setTimeout(() => {
      welcomeScene.classList.remove("active");
      gardenScene.classList.add("active");
      gardenScene.style.opacity = "1";
      createFlowers();
    }, 1000);
  }, 7500); // Total journey: 7.5s
});
