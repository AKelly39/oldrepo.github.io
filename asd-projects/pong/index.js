/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  
  // Game Item Objects
  function gameObject (id, speedX, speedY) {
    var gameObject = {};
    gameObject.id = id;
    gameObject.x = parseFloat($(id).css("left"));
    gameObject.y = parseFloat($(id).css("top"));
    gameObject.speedX = speedX;
    gameObject.speedY = speedY;
    gameObject.width = $(id).width();
    gameObject.height = $(id).height();
    return gameObject;
  }

  var paddleL = gameObject("#paddleL", 0, 0);
  var paddleR = gameObject("#paddleR", 0, 0);
  var pongBall = gameObject("#pongBall", 0, 0);

  function playerScores (id, score) {
    var playerScores = {};
    playerScores.id = id;
    playerScores.score = score;
    return playerScores;
  }

  var scorePlayerL = playerScores("#scorePlayerL", 0);
  var scorePlayerR = playerScores("#scorePlayerR", 0);


  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  /*
  var KEY = {
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "S": 83
  } */

  startBall();

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {      
    moveObject(paddleL);
    moveObject(paddleR);
    moveObject(pongBall);

    wallCollision(paddleL);
    wallCollision(paddleR);
    wallCollision(pongBall);
    
    doCollide(pongBall, paddleL);
    doCollide(pongBall, paddleR);

    if (scorePlayerR.score === 11 || scorePlayerL.score === 11){
      endGame();
    }
    

   
    

  }
  
  /* 
  Called in response to events.
  */

  var KEY = {
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "S": 83
  }

  //My main issue here in pong is that I can't move my paddles
  function handleKeyDown(event) { 
    console.log(event.which);
    if (event.which === KEY.UP) {
      paddleL.speedY = -5;
    }
    if (event.which === KEY.DOWN) {
      paddleL.speedY = 5;
    }
    if (event.which === KEY.W) {
      paddleR.speedY = -5;
    }
     if (event.which === KEY.S) {
      paddleR.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      paddleL.speedY = 0;
    }
   if (event.which === KEY.DOWN) {
      paddleL.speedY = 0;
    }
    if (event.which === KEY.W) {
      paddleR.speedY = 0;
    }
    if (event.which === KEY.S) {
      paddleR.speedY = 0;
    }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function startBall() {
    pongBall.x = 200;
    pongBall.y = 200;
    pongBall.speedX = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  }
  function moveObject(gameObject) {
    console.log(gameObject);
    gameObject.x += gameObject.speedX;
    gameObject.y += gameObject.speedY;
    $(gameObject.id).css("left", gameObject.x);
    $(gameObject.id).css("top", gameObject.y);
  }
  function wallCollision(gameObject) {
    if (gameObject.x < 0 || gameObject.y < 0 ||
      gameObject.x + gameObject.width > BOARD_WIDTH ||
      gameObject.y + gameObject.height > BOARD_HEIGHT) {
        gameObject.speedY = -gameObject.speedY;
        //return true
    } 
    if (pongBall.x < 0) {
      var updatedScore = scorePlayerR.score + 1;
      $("#scorePlayerR").text(updatedScore);
      scorePlayerR.score = updatedScore;
      startBall();

    } if (pongBall.x + pongBall.width > BOARD_WIDTH) {
      var updatedScore = scorePlayerL.score + 1;
      $("#scorePlayerL").text(updatedScore);
      scorePlayerL.score = updatedScore;
      startBall();
    }  
  }

  function doCollide(gameObject1, gameObject2) {
    if (gameObject1.x < gameObject2.x + gameObject2.width &&
      gameObject1.x + pongBall.width > gameObject2.x &&
      gameObject1.y < gameObject2.y + gameObject2.height &&
      gameObject1.y + gameObject1.height > gameObject2.y) {
        gameObject1.speedX = -gameObject1.speedX; 
    } 
  }
  



  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
