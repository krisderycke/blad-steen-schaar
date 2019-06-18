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
// Random.addEventListener("click", randomUser);
Fight.addEventListener("click", fight);
Reset.addEventListener("click", reset);

function reset() {
  document.getElementById("User").className = "question";
  document.getElementById("Pc").className = "question";
  document.getElementById("span").innerHTML = "";
}

function rock() {
  User.className = "rock";
  console.log("rock");
}
function paper() {
  User.className = "paper";
  console.log("paper");
}

function scissor() {
  User.className = "scissors";
  console.log("scicc");
}

// function randomUser() {
//   var randomImages = [
//     "/Assets/images/rock.png",
//     "/Assets/images/paper.jpg",
//     "/Assets/images/scissors.png"
//   ];

//   var rand = randomImages[Math.floor(Math.random() * randomImages.length)];
//   document.getElementById("User").src = rand;
//   console.log("random");

//making "fight button" pick a random image

function fight() {
  var randomClassesPc = ["rock", "paper", "scissors"];

  var randPc =
    randomClassesPc[Math.floor(Math.random() * randomClassesPc.length)];
  Pc.className = randPc;
  console.log("randomPc");






  

//   var span = document.getElementById("span");
//   if (User.className === "rock" && Pc.className === "rock") {
//     span.innerHTML = "It's a tie, reset and start again";
//     console.log("result");
//   } else if (
//     User.src == "/Assets/images/paper.jpg" &&
//     Pc.src == "/Assets/images/rock.png"
//   ) {
//     span.innerHTML = "You win!";
//     console.log("result");
//   } else if (
//     User.src == "/Assets/images/scissors.png" &&
//     Pc.src == "/Assets/images/rock.png"
//   ) {
//     span.innerHTML = "Auwtch, You loose";
//     console.log("result");
//   } else if (
//     User.src == "/Assets/images/rock.png" &&
//     Pc.src == "/Assets/images/paper.jpg"
//   ) {
//     span.innerHTML = " Aha, you shredded the opponent!";
//     console.log("result");
//   } else if (
//     User.src == "/Assets/images/paper.jpg" &&
//     Pc.src == "/Assets/images/paper.jpg"
//   ) {
//     span.innerHTML = "Tie break. please reset";
//     console.log("result");
//   } else if (
//     User.src == "/Assets/images/scissors.png" &&
//     Pc.src == "/Assets/images/paper.jpg"
//   ) {
//     span.innerHTML = " The enemy has defeated you";
//     console.log("result");
//   } else if (
//     User.src == "/Assets/images/rock.png" &&
//     Pc.src == "/Assets/images/scissors.png"
//   ) {
//     span.innerHTML = "You crushed the foo";
//     console.log("result");
//   } else if (
//     User.src == "/Assets/images/paper.jpg" &&
//     Pc.src == "/Assets/images/scissors.png"
//   ) {
//     span.innerHTML = "The enemy has cut you in pieces, fight again!";
//     console.log("result");
//   } else
//     User.src == "./Assets/images/scissors.png" &&
//       Pc.src == "./Assets/images/scissors.png";

//   span.innerHTML = " reset the fight, one cannot win from the same element";
//   console.log("result");
//   console.log(User.src);
//   console.log(Pc.src);
//   console.log("false", User.src === "/Assets/images/scissors.png");
//   console.log(
//     "somtimes true",
//     Pc.src === "http://127.0.0.1:5500/Assets/images/scissors.png"
//   );
// }
