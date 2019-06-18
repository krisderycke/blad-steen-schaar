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

function randomUser() {
  var randomImages = ["rock", "paper", "scissors"];

  var rand = randomImages[Math.floor(Math.random() * randomImages.length)];
  User.className = rand;
  console.log("random");
}

//making "fight button" pick a random image for the Pc

function fight() {
  var span = document.getElementById("span");
  var randomClassesPc = ["rock", "paper", "scissors"];

  var randPc =
    randomClassesPc[Math.floor(Math.random() * randomClassesPc.length)];
  Pc.className = randPc;
  console.log("randomPc");

  if (User.className === "rock" && Pc.className === "rock") {
    span.innerHTML = " It's a tie, reset and start again";
    span.style.color = "blue";
  } else if (User.className === "paper" && Pc.className === "rock") {
    span.innerHTML = " You win!";
    span.style.color = "green";
  } else if (User.className === "scissors" && Pc.className === "rock") {
    span.innerHTML = " Auwtch, You loose";
    span.style.color = "red";
  } else if (User.className === "rock" && Pc.className === "paper") {
    span.innerHTML = " The enemy has defeated you";
    span.style.color = "red";
  } else if (User.className === "paper" && Pc.className === "paper") {
    span.innerHTML = " Tie break. please reset";
    span.style.color = "blue";
  } else if (User.className === "scissors" && Pc.className === "paper") {
    span.innerHTML = " Aha, you shredded the opponent! ";
    span.style.color = "green";
  } else if (User.className === "rock" && Pc.className === "scissors") {
    span.innerHTML = " You crushed the foo";
    span.style.color = "green";
  } else if (User.className === "paper" && Pc.className === "scissors") {
    span.innerHTML = " The enemy has cut you in pieces, fight again!";
    span.style.color = "red";
  } else User.className === "scissors" && Pc.className === "scissors";
  span.innerHTML = " Reset the fight, one cannot win from the same element";
  span.style.color = "blue";
}
