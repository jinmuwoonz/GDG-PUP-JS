const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  // math floor rounds down the generated random number
  const randomColor = Math.floor(Math.random() * 16777215) // generates a random number, then was multiplied to 16777215(largest possible 6-digit hexadecimal number)
    .toString(16) // converts it into base-16 string
    .padStart(6, "0"); // ensures the string is 6 char long by adding leading zeros when necessary
  document.body.style.backgroundColor = `#${randomColor}`;
}
