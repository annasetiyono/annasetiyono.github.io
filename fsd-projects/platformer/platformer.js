$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 2000); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 2000); // right wall


    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(500, 615, 290, 20, "red", 100, 600, 2);
   createPlatform(1000, 480, 230, 20, "red");
   createPlatform(815, 375, 50, 20, "purple");
   createPlatform(100, 350, 230, 20, "white");
   createPlatform(560, 200, 230, 20, "white");
   createPlatform(1000, 280, 50, 20, "purple");
   createBadPlatform(400, 480, 50, 20, "green")
    // TODO 3 - Create Collectables
   createCollectable("diamond", 650, 80, 0.1, 1);
   createCollectable("steve", 200, 170, 0.5, 0.7);
   createCollectable("database", 1020, 80, 0.1);
   createCollectable("grace", 200, 250, 0, 1, 100, 1300, 2);


    
    // TODO 4 - Create Cannons
  createCannon("top", 350, 1000);
  createCannon("right", 300, 1200, 50, 10, 100, 800, 2);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
