const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissor = document.getElementById("Scissors");
const Random = document.getElementById("Random");
const Reset = document.getElementById("Reset");

Rock.addEventListener("click", rock);
Paper.addEventListener("click", paper);
Scissor.addEventListener("click", scissor);
Random.addEventListener("click", random);

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

function random() {
  var randomImages = [
    "/Assets/images/rock.png",
    "/Assets/images/paper.jpg",
    "/Assets/images/scissors.png"
  ];

  var rand = randomImages[Math.floor(Math.random() * randomImages.length)];
  document.getElementById("User").src = rand;
}
