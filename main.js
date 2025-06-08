const boxContainer = document.createElement("div");
const guessedNumberP = document.createElement("p");

const gameContainer = document.querySelector(".gameContainer");
const message = document.getElementById("message");
const chances = document.getElementById("chances")
boxContainer.classList.add("boxContainer");
guessedNumberP.classList.add("guessedNumberP");
gameContainer.appendChild(boxContainer);

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

let guessedNumber;

const displayGuessedNumberP = () => {
  guessedNumber = allBoxValues[Math.floor(Math.random() * allBoxValues.length)];
  gameContainer.appendChild(guessedNumberP);
  guessedNumberP.textContent = guessedNumber;
};

let choice = 2;
let isProccessing = true;
const chooseOneBox = () => {
  allBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (!isProccessing || box.classList.contains("clicked")) {
        return;
      }

      box.classList.add("clicked"); // აღვნიშნავთ, რომ უკვე დააჭირეს

      choice--;
      box.querySelector(".boxValue").style.opacity = 1;

      if (box.querySelector(".boxValue").textContent == guessedNumber) {
        message.textContent = "Answer Is Right";
        chances.textContent = `you have ${choice}`;
        isProccessing = false;
        resetFunction();
      } else {
        chances.textContent = `you have ${choice}`;
        if (choice <= 0) {
          isProccessing = false;
          message.textContent = "წააგე ჰეჰე.";
          resetFunction();
        } else {
          message.textContent = "Answer Is False but you can do it!";
        }
      }
    });
  });
};

chances.textContent = `you have ${choice}`
const mainFunction = () => {
  createManyBox(3);
  displayGuessedNumberP();
  chooseOneBox();
};

mainFunction();

const resetFunction = () => {
  setTimeout(() => {
    boxContainer.innerHTML = "";
    message.textContent = "";
    guessedNumberP.textContent = "";
    allBoxValues.length = 0;
    allBoxes.lenght = 0;
    choice = 2;
    chances.textContent = `you have ${choice}`
    isProccessing = true;
    mainFunction();
  }, 2000);
};
