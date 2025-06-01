const boxContainer = document.createElement("div");
boxContainer.classList.add("boxContainer");
document.body.appendChild(boxContainer);
const allBoxes = [];
const allBoxValues = [];

const createBox = () => {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } while (allBoxValues.includes(randomNumber));

  const box = document.createElement("div");
  const boxValue = document.createElement("p");

  allBoxValues.push(randomNumber);
  boxValue.textContent = randomNumber;

  boxValue.classList.add("boxValue");
  box.classList.add("box");

  box.appendChild(boxValue);
  boxContainer.appendChild(box);
  allBoxes.push(box);
};

const createManyBox = (boxQuantity) => {
  for (let i = 0; i < boxQuantity; i++) {
    createBox();
  }
};

createManyBox(3);

const message = document.getElementById("message");
const guessedNumber = document.createElement("p");
document.body.appendChild(guessedNumber);
guessedNumber.textContent = allBoxValues[Math.floor(Math.random() * 3)];

const chooseOneBox = () => {
  allBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.querySelector(".boxValue").style.opacity = 1;
      if (
        box.querySelector(".boxValue").textContent == guessedNumber.textContent
      ) {
        message.textContent = "answer is right";
      } else {
        message.textContent = "answer is false";
      }
    });
  });
};

chooseOneBox();
