// DOM Selector
const winScore = document.getElementById("wins");
const loseScore = document.getElementById("losses");
const tieScore = document.getElementById("ties");
const result = document.getElementById("result");
const userChoiceImg = document.querySelector("#userChoice .choice--img");
const computerChoiceImg = document.querySelector(
  "#computerChoice .choice--img"
);
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const startBtn = document.getElementById("startButton");
const resetBtn = document.getElementById("resetButton");

// Event Listeners
rock.addEventListener("click", () => selectingChoice(rock.id));
paper.addEventListener("click", () => selectingChoice(paper.id));
scissors.addEventListener("click", () => selectingChoice(scissors.id));
startBtn.addEventListener("click", () => startGame(userChoice));
resetBtn.addEventListener("click", () => resetGame());

// Variables
let userChoice = null;
let computerChoice = null;
let gameResult = null;
let userWins = 0;
let userLoses = 0;
let userTies = 0;

// Main Functions
function selectingChoice(choice) {
  userChoice = choice;
  startBtn.disabled = false;
  displayChoices(userChoice, computerChoice);
}

function displayChoices(userChoice, computerChoice) {
  const imageMap = {
    rock: "./assets/images/icon-rock.png",
    paper: "./assets/images/icon-paper.png",
    scissors: "./assets/images/icon-scissors.png",
    defaultUser: "./assets/images/icon-user.png",
    defaultComputer: "./assets/images/icon-computer.png",
  };

  userChoiceImg.src = imageMap[userChoice] || imageMap.defaultUser;
  computerChoiceImg.src = imageMap[computerChoice] || imageMap.defaultComputer;
}

function startGame(userChoice) {
  computerWeapons = [
    { id: 1, weapon: "rock" },
    { id: 2, weapon: "paper" },
    { id: 3, weapon: "scissors" },
  ];

  const randomGeneratedID = Math.floor(Math.random() * 3) + 1; //use to generate a random ID from 1-3
  const computerChoiceTemp = computerWeapons.find(
    (computerChoice) => computerChoice.id === randomGeneratedID
  ); //finds the generated ID from the computer weapons and stores it as the computer's choice
  computerChoice = computerChoiceTemp.weapon;

  startBtn.disabled = true;
  disableChoices(); //disables the choices so user can't click it while determining scores
  determineScores(userChoice, computerChoice);
}

function determineScores(userChoice, computerChoice) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (userChoice === computerChoice) {
    gameResult = "It's a Tie!";
    userTies++;
  } else if (winConditions[userChoice] === computerChoice) {
    gameResult = "User Wins!";
    userWins++;
  } else {
    gameResult = "Computer Wins!";
    userLoses++;
  }

  shortTimer(updateScores);
}

function shortTimer(callback) {
  resetBtn.disabled = true; //disables the reset button so user can't click it during the countdown
  let counter = 3;

  const countdown = setInterval(() => {
    result.textContent = counter;
    counter--;
    if (counter < 0) {
      clearInterval(countdown);
      result.textContent = gameResult; //displays the winner after the countdown
      if (callback) callback(); //calls the function updateScores

      //resets the result text and userchoice/computerchoice images after 2 secs
      setTimeout(() => {
        result.textContent = "Choose your weapon!";
        userChoiceImg.src = "./assets/images/icon-user.png";
        computerChoiceImg.src = "./assets/images/icon-computer.png";
        computerChoice = "";
        gameResult = "";
        enableChoices(); //enables the choices again
        resetBtn.disabled = false; //enables the resetbutton
        clearInterval(backAtTheGame);
      }, 2000);
    }
  }, 1000);
}

function updateScores() {
  displayChoices(userChoice, computerChoice); //shows the choices of both the user and computer
  winScore.textContent = userWins;
  loseScore.textContent = userLoses;
  tieScore.textContent = userTies;
}

// Sub Functions
function resetGame() {
  userChoice = "";
  computerChoice = "";
  userWins = 0;
  userLoses = 0;
  userTies = 0;
  startBtn.disabled = true;
  updateScores();
}

function disableChoices() {
  rock.style.pointerEvents = "none";
  paper.style.pointerEvents = "none";
  scissors.style.pointerEvents = "none";
}

function enableChoices() {
  rock.style.pointerEvents = "auto";
  paper.style.pointerEvents = "auto";
  scissors.style.pointerEvents = "auto";
}
