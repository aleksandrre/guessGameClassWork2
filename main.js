const boxContainer = document.createElement("div");
boxContainer.classList.add("boxContainer");
document.body.appendChild(boxContainer);
const allBoxes = [];
const allBoxValues = [];
const createBox = () => {
  const box = document.createElement("div");
  const boxValue = document.createElement("p");
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  allBoxValues.push(randomNumber);
  boxValue.textContent = randomNumber;

  boxValue.classList.add("boxValue");
  box.classList.add("box");

  box.appendChild(boxValue);
  boxContainer.appendChild(box);
  allBoxes.push(box);
};

const createManyBox = () => {
  for (let i = 0; i < 3; i++) {
    createBox();
  }
};

createManyBox();

const guessedNumber = () => {
  const guessedNumber = document.createElement("p");
  document.body.appendChild(guessedNumber);
  guessedNumber.textContent = allBoxValues[Math.floor(Math.random() * 3)];
};
guessedNumber();

const chooseOneBox = () => {
  allBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.querySelector(".boxValue").style.display = "block";
    });
  });
};

chooseOneBox();
