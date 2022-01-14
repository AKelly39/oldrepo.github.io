$(document).ready(function() {
    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// INITIALIZATION ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    var FPS = 60;
    /*
    var playerID = "#player1";
    var playerX = 100;
    var playerY = 100;
    var playerVelocityX = 0;
    var playerVelocityY = 0;
  
    
    var player2 = {
      id: "#player2",
      x: 100,
      y: 100,
      velocityX: 0,
      velocityY: 0
    }; */
  
    //Creates new players
    function player(id, x, y, velocityX, velocityY) {
      var player = {};
      player.ID = id;
      player.x = x;
      player.y = y;
      player.velocityX = velocityX;
      player.velocityY = velocityY;
      return player;
    } 
  
    var player1 = player("#player1", 100, 100, 0, 0);
    var player2 = player("#player2", 100, 100, 0, 0);
    

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// CORE LOGIC //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    setInterval(newFrame, 1000 / FPS); // execute newFrame() 60 times per second

	$(document).on('keydown', setPlayerVelocity); // execute setPlayerVelocity() in response to keydown events
	$(document).on('keyup', stopPlayerVelocity);  // execute stopPlayerVelocity() in response to keydown events
    
    function newFrame() {
        player1.x += player1.velocityX;
        player1.y += player1.velocityY;
      
        player2.x += player2.velocityX;
        player2.y += player2.velocityY;
			
        $(player1.ID).css("left", player1.x);
        $(player1.ID).css("top", player1.y);
      
        $(player2.ID).css("left", player2.x);
        $(player2.ID).css("top", player2.y);
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
	

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// KEYBOARD FUNCTIONS //////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    /** 
    Key codes:
    - left: 37
    - up: 38
    - right: 39
    - down: 40
    - w: 87
    - a: 65
    - s: 83
    - d: 68
    - c: 67
    */
  
    var KEY = {
      "LEFT": 37,
      "UP": 38,
      "RIGHT": 39,
      "DOWN": 40,
      "W": 87,
      "A": 65,
      "S": 83,
      "D": 68,
      "C": 67
    }
    
    //Player 1 moves
    function setPlayerVelocity(event) {
        if (event.which === KEY.UP) {
           player1.velocityY = -5; 
        }
        if (event.which === KEY.DOWN) {
           player1.velocityY = 5; 
        }
        if (event.which === KEY.LEFT) {
           player1.velocityX = -5; 
        }
        if (event.which === KEY.RIGHT) {
           player1.velocityX = 5; 
        }
    }
    //Player 2 moves
     function setPlayerVelocity(event) {
        if (event.which === KEY.W) {
           player2.velocityY = -5; 
        }
        if (event.which === KEY.S) {
           player2.velocityY = 5; 
        }
        if (event.which === KEY.A) {
           player2.velocityX = -5; 
        }
        if (event.which === KEY.D) {
           player2.velocityX = 5; 
        }
    }

    //Player 1 stops
    function stopPlayerVelocity(event) {
        if (event.which === KEY.UP || event.which === KEY.DOWN) {
           player1.velocityY = 0; 
        }

        if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
           player1.velocityX = 0; 
        }
    }
  
     
    //Player 2 stops
    function stopPlayerVelocity(event) {
        if (event.which === KEY.W || event.which === KEY.S) {
           player2.velocityY = 0; 
        }

        if (event.which === KEY.A || event.which === KEY.D) {
           player2.velocityX = 0; 
        }
    }

  
  
  
  
  
  
}); // DO NOT DELETE

