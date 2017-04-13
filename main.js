// Targetin DOM

const firstScoreText = document.querySelector(".first .score");
const firstBtnAdd1 = document.querySelector(".first .add-one");
const firstBtnAdd2 = document.querySelector(".first .add-two");
const firstBtnAdd3 = document.querySelector(".first .add-three");

const secondScoreText = document.querySelector(".second .score");
const secondBtnAdd1 = document.querySelector(".second .add-one");
const secondBtnAdd2 = document.querySelector(".second .add-two");
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
