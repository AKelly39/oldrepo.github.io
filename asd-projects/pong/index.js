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
    gameObject.x = parseFloat($("#id").css("left"));
    gameObject.y = parseFloat($("#id").css("top"));
    gameObject.speedX = speedX;
    gameObject.speedY = speedY;
    gameObject.width = $("#id").width();
    gameObject.height = $("#id").height();
    return gameObject;
  }

  var paddleL = gameObject("#paddleL", 0, 0);
  var paddleR = gameObject("#paddleR", 0, 0);
  var pongBall = gameObject("#pongBall", 0, 0);


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
    function moveObject(gameObject) {
      gameObject.x += gameObject.speedX;
      gameObject.y += gameObject.speedY;
      $("#gameObject").css("left", gameObject.x);
      $("#gameObject").css("top", gameObject.y);
    }

    function wallCollision(gameObject) {
      if (gameObject.x < 0 || gameObject.y < 0 ||
        gameObject.x + gameObject.width > BOARD_WIDTH ||
        gameObject.y + gameObject.height > BOARD_HEIGHT) {
          return true;
      } 
      if (pongBall.x < 0) {

        $("#scorePlayerR").text(updatedScore)
        startBall;

      } if (pongBall.x + pongBall.width > BOARD_WIDTH) {

        $("#scorePlayerL").text(updatedScore);
        startBall;

      } else {
         return false;
      }
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
    if (event.which === KEY.UP) {
      paddleR.speedY += 5;
    }
    if (event.which === KEY.DOWN) {
      paddleR.speedY -= 5;
    }
    if (event.which === KEY.W) {
      paddleL.speedY += 5;
    }
     if (event.which === KEY.S) {
      paddleL.speedY -= 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      paddleR.speedY = 0;
    }
   if (event.which === KEY.DOWN) {
      paddleR.speedY = 0;
    }
    if (event.which === KEY.W) {
      paddleL.speedY = 0;
    }
    if (event.which === KEY.S) {
      paddleL.speedY = 0;
    }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function startBall() {
    pongBall.x = 100;
    pongBall.y = 200;
    pongBall.speedX = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  }



  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
