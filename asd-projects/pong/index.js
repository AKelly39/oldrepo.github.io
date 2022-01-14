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
  function gameObject (x, y, width, height) {
    var gameObject = {};
    gameObject.x = parseFloat($("#id").css("left"));
    gameObject.y = parseFloat($("#id").css("top"));
    gameObject.width = $("#id").width();
    gameObject.height = $("#id").height();
  }


  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  var KEY = {
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "S": 83
  }

  startBall()

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {
    if (event.which === KEY.UP) {
      console.log("up pressed");
      paddleR.speedY = +5;
    }
    if (event.which === KEY.DOWN) {
      paddleR.y = -5;
    }
    if (event.which === KEY.W) {
      paddleL.y = +5;
    }
     if (event.which === KEY.S) {
      paddleL.y = -5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      paddleR.y = 0;
    }
    else if (event.which === KEY.DOWN) {
      paddleR.y = 0;
    }
    if (event.which === KEY.W) {
      paddleL.y = 0;
    }
    else if (event.which === KEY.S) {
      paddleL.y = 0;
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

  function moveObject(gameObject) {
    gameObject.x = ;
    gameObject.y = ;
    $("#gameObject").css("left", positionX);
    $("#gameObject").css("top", positionY);
    }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
