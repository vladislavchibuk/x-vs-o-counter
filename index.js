const counterX = document.querySelector(".value-text-x");
const counterO = document.querySelector(".value-text-o");

const btnX = document.querySelector(".btn-x");
const btnO = document.querySelector(".btn-o");

const btnReset = document.querySelector(".btn-reset");
const btnResult = document.querySelector(".btn-result");

const resultText = document.querySelector(".result-text-win");

let countX = 0;
let countO = 0;

const updateCounter = (element, count) => {
  element.textContent = count;
};

btnX.addEventListener("click", () => updateCounter(counterX, ++countX));
btnO.addEventListener("click", () => updateCounter(counterO, ++countO));

btnReset.addEventListener("click", () => {
  countX = countO = 0;
  updateCounter(counterX, countX);
  updateCounter(counterO, countO);
  resultText.textContent = "";
});

btnResult.addEventListener("click", () => {
  if (countO > countX) {
    resultText.textContent = "Победили синие!";
  } else if (countX > countO) {
    resultText.textContent = "Победили красные!";
  } else {
    resultText.textContent = "Победила дружба!";
  }
});
