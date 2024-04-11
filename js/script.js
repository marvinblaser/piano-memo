var buttonLetters = ["A", "B", "C", "D"]; //assigned color patterns
var gamePattern = []; //tracks pattern
var highscore = 0; //tracks highscore
var level = 0; //tracks current level
var started = false; // check to see if the game is going
var userClickedPattern = []; // tracks user pattern

// Event listener for buttonscolors
$(".tile").click(function (event) {
  if (started === true) {
    //check to see if game is running
    var userChosenColour = $(this).attr("id"); //accepts the userClickedPattern from the user
    userClickedPattern.push(userChosenColour); // adds it to userpattern array
    playSound(userChosenColour);
    animatePress(userChosenColour); //animate effect
    checkAnswer(userClickedPattern.length - 1); // checks if correct pattern
  }
});

/*
    Event listener to start/restart game
*/
$(".start-button").click(function (event) {
  if (started === false) {
    // runs new game
    nextSequence(); // starts the sequence;
    started = true;
    $(".start-page").hide(); // hides the go button
  }
});

// check gamePattern against userClickedPattern is followed
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); //wait one second and add to sequence
      }, 1000);
    }
  } else {
    document.querySelector("body").classList.add("game-over"); //game ending animation
    document.querySelector("#level-title").innerText = "Game Over, Press Go to Restart";

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver(); //resets game
  }
}

//Adds next sequence to the game pattern
function nextSequence() {
  userClickedPattern = []; //clears user pattern
  level++;
  document.querySelector("#level-title").innerText = "Level " + level; // update level
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); //ads random to currentColor
  playPattern(); //play updated gamePattern to user
}

// full Game pattern for each user level
function playPattern() {
  var i = 0;
  const interval_check = setInterval(function () {
    $("#" + gamePattern[i])
      .fadeOut(100)
      .fadeIn(100);
    playSound(gamePattern[i]);
    i += 1;
    if (i === gamePattern.length) {
      clearInterval(interval_check);
    }
  }, 1000);
}

//userclicked animation effect
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//set function to play assigned sounds
function playSound(name) {
  var sound = new Audio("../stock/sounds/" + name + ".mp3");
  sound.play();
}

//clear level + gamePattern
function startOver() {
  if (level > highscore) {
    highscore = level - 1;
    $("h3").text("High Score: " + highscore);
  }
  level = 0;
  gamePattern = [];
  started = false;
  $(".startgame").show();
}

//set Game over function
function animateGameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
}
