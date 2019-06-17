const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissor = document.getElementById("Scissors");
const Random = document.getElementById("Random");
const Fight = document.getElementById("Fight");
const Reset = document.getElementById("Reset");

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

  // let _1 = (document.getElementById("User").src = "/Assets/images/rock.png");
  // let _2 = (document.getElementById("User").src = "/Assets/images/paper.jpg");
  // let _3 = (document.getElementById("User").src =
  //   "/Assets/images/scissors.png");

  // let _4 = (document.getElementById("Pc").src = "/Assets/images/rock.png");
  // let _5 = (document.getElementById("Pc").src = "/Assets/images/paper.jpg");
  // let _6 = (document.getElementById("Pc").src = "/Assets/images/scissors.png");

  console.log("fight");
}
