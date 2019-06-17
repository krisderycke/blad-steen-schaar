const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissor = document.getElementById("Scissors");
const Random = document.getElementById("Random");
const Fight = document.getElementById("Fight");
const Reset = document.getElementById("Reset");
const User = document.getElementById("User");
const Pc = document.getElementById("Pc");

Rock.addEventListener("click", rock);
Paper.addEventListener("click", paper);
Scissor.addEventListener("click", scissor);
Random.addEventListener("click", randomUser);
Fight.addEventListener("click", fight);
Reset.addEventListener("click", reset);

function reset() {
  document.getElementById("User").src = "/Assets/images/question.png";
  document.getElementById("Pc").src = "/Assets/images/question.png";
}

function rock() {
  document.getElementById("User").src = "/Assets/images/rock.png";
  console.log("rock");
}
function paper() {
  document.getElementById("User").src = "/Assets/images/paper.jpg";
  console.log("paper");
}

function scissor() {
  document.getElementById("User").src = "/Assets/images/scissors.png";
  console.log("scicc");
}

function randomUser() {
  var randomImages = [
    "/Assets/images/rock.png",
    "/Assets/images/paper.jpg",
    "/Assets/images/scissors.png"
  ];

  var rand = randomImages[Math.floor(Math.random() * randomImages.length)];
  document.getElementById("User").src = rand;
  console.log("random");
}

//making "fight button" pick a random image

function fight() {
  var randomImagesPc = [
    "/Assets/images/rock.png",
    "/Assets/images/paper.jpg",
    "/Assets/images/scissors.png"
  ];

  var randPc =
    randomImagesPc[Math.floor(Math.random() * randomImagesPc.length)];
  document.getElementById("Pc").src = randPc;
  console.log("randomPc");

  let span = document.getElementById("span");
  if (
    User.src == "/Assets/images/rock.png" &&
    Pc.src == "/Assets/images/rock.png"
  ) {
    span.innerHTML = "It's a tie, reset and start again";
  }
  if (
    User.src == "/Assets/images/paper.jpg" &&
    Pc.src == "/Assets/images/rock.png"
  ) {
    span.innerHTML = "You win!";
  }

  if (
    User.src == "/Assets/images/scissors.png" &&
    Pc.src == "/Assets/images/rock.png"
  ) {
    span.innerHTML = "Auwtch, You loose";
  }
  if (
    User.src == "/Assets/images/rock.png" &&
    Pc.src == "/Assets/images/paper.jpg"
  ) {
    span.innerHTML = " Aha, you shredded the opponent!";
  }
}
if (
  User.src == "/Assets/images/paper.jpg" &&
  Pc.src == "/Assets/images/paper.jpg"
) {
  span.innerHTML = "Tie break. please reset";
}
if (
  User.src == "/Assets/images/scissors.png" &&
  Pc.src == "/Assets/images/paper.jpg"
) {
  span.innerHTML = " The enemy has defeated you";
}
if (
  User.src == "/Assets/images/rock.png" &&
  Pc.src == "/Assets/images/scissors.png"
) {
  span.innerHTML = "You crushed the foo";
}
if (
  User.src == "/Assets/images/paper.jpg" &&
  Pc.src == "/Assets/images/scissors.png"
) {
  span.innerHTML = "The enemy has cut you in pieces, fight again!";
}
if (
  User.src == "/Assets/images/scissors.png" &&
  Pc.src == "/Assets/images/scissors.png"
) {
  span.innerHTML = " reset the fight, one cannot win from the same element";
}
