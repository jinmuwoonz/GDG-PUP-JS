function checkAge() {
  const category = document.getElementById("result");
  const ageInput = document.getElementById("ageInput");

  let age = ageInput.value.trim(); //removes whitespaces
  category.textContent = ""; // resets the message
  category.classList.remove("error"); //removes the class error

  if (age === "") {
    // if the input is empty, it prompts that a value must be entered
    category.classList.add("error");
    category.textContent = "Please enter your age in numeric.";
    return;
  }

  age = Number(age); //converts the input value into number

  if (age >= 0 && age <= 12) {
    category.textContent = "You are a(n): Child";
  } else if (age >= 13 && age <= 19) {
    category.textContent = "You are a(n): Teen";
  } else if (age >= 20) {
    category.textContent = "You are a(n): Adult";
  } else {
    category.classList.add("error");
    category.textContent = "Invalid age. Please enter a valid number.";
  }
}
