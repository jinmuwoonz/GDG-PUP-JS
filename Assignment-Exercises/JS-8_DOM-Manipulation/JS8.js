const counterText = document.getElementById("counter-text");
const subtractBtn = document.querySelector("#button-subtract");
const addBtn = document.querySelector("#button-add");

let counterValue = parseInt(counterText.textContent, 10); // this converts the string into integer with base 10

subtractBtn.addEventListener("click", subtractValue);
addBtn.addEventListener("click", addValue);

function subtractValue() {
  if (counterValue !== 0) {
    counterValue--;
    updateTextContent();
  }
}

function addValue() {
  counterValue++;
  updateTextContent();
}

function updateTextContent() {
  counterText.textContent = counterValue;
}
