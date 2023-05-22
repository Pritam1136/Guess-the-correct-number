"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "😥 correct number";
// document.querySelector(".number").textContent = "13";
// document.querySelector(".score").textContent = "10";

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let number = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "no number selected !";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "correct number !";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = " 30 rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    document.querySelector(".message").textContent =
      guess > number ? "number is too high !" : "number is too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
  // else if (guess > number) {
  //   document.querySelector(".message").textContent = "number is too high !";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // } else if (guess < number) {
  //   document.querySelector(".message").textContent = "number is too low !";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // }
  // if (score === 0) {
  //   document.querySelector(".message").textContent = "you lost the game!";
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.ceil(Math.random() * 20);
  // document.querySelector(".number").textContent = number;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = " 15rem";
});
