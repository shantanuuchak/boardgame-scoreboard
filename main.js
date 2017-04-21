// Targetin DOM

const winText = document.querySelector(".heading");

const firstScoreText = document.querySelector(".first .score");
const secondScoreText = document.querySelector(".second .score");

const firstBtnAdd1 = document.querySelector(".first .add-one");
const secondBtnAdd1 = document.querySelector(".second .add-one");

const firstBtnAdd2 = document.querySelector(".first .add-two");
const secondBtnAdd2 = document.querySelector(".second .add-two");

const firstBtnAdd3 = document.querySelector(".first .add-three");
const secondBtnAdd3 = document.querySelector(".second .add-three");

// Game Score
const score = {
  first: 0,
  second: 0,
};

// addScore(1/2, 1/2/3)
function addScore(user, count) {
  score[user] += count;
}

// Paint DOM
function paintDOM() {
  firstScoreText.textContent = score["first"];
  secondScoreText.textContent = score["second"];

  if (score["first"] === score["second"]) {
    winText.textContent = "Draw ♠️";
  } else if (score["first" > score["second"]]) {
    winText.textContent = "Player 1️⃣ is on lead.";
  } else {
    winText.textContent = "Player 2️⃣ is on lead.";
  }
}

// Adding event listeners
// Add 1
firstBtnAdd1.addEventListener("click", function () {
  addScore("first", 1);
  paintDOM();
});
secondBtnAdd1.addEventListener("click", function () {
  addScore("second", 1);
  paintDOM();
});

// Add 2
firstBtnAdd2.addEventListener("click", function () {
  addScore("first", 2);
  paintDOM();
});
secondBtnAdd2.addEventListener("click", function () {
  addScore("second", 2);
  paintDOM();
});

// Add 3
firstBtnAdd3.addEventListener("click", function () {
  addScore("first", 3);
  paintDOM();
});
secondBtnAdd3.addEventListener("click", function () {
  addScore("second", 3);
  paintDOM();
});
