const boxContainer = document.createElement("div");
boxContainer.classList.add("boxContainer");
document.body.appendChild(boxContainer);

const boxes = [];
const displayBox = () => {
  const box = document.createElement("div");
  const numberP = document.createElement("p");

  box.classList.add("box");
  numberP.classList.add("numberP");

  numberP.textContent = Math.floor(Math.random() * 10) + 1;
  boxContainer.appendChild(box);
  box.appendChild(numberP);
  boxes.push(box);
};

const displayAllBox = () => {
  for (let i = 0; i < 3; i++) {
    displayBox();
  }
};

displayAllBox();

const displaySpan = () => {
  const span = document.createElement("h1");
  span.classList.add("hidden");
  document.body.appendChild(span);

  const numbers = document.querySelectorAll(".numberP");

  const randomNumber = Math.floor(Math.random() * 3);
  const randomSpan = numbers[randomNumber].textContent;
  span.textContent = numbers[randomNumber].textContent;
};
displaySpan();
const chooseOneBox = () => {
  const hiddenSpan = document.querySelector(".hidden");

  const winOrLose = document.createElement("div");
  document.body.append(winOrLose);
  boxes.forEach((box) =>
    box.addEventListener("click", () => {
      box.querySelector(".numberP").style.display = "block";
      box.querySelector("p").textContent == hiddenSpan.textContent
        ? (winOrLose.textContent = "გილოცავ შენ გამოიცანი")
        : (winOrLose.textContent = "ვერ გამოიცანი");
    })
  );
};
chooseOneBox();
