const choices = ["rock", "paper", "scissors"];
const outcome = ["draw", "player", "computer"];
const btns = document.querySelectorAll("button");
const para1 = document.querySelector(".para-1");
const para2 = document.querySelector(".para-2");
const para3 = document.querySelector(".para-3");
const para4 = document.querySelector(".para-4");
const player_score = document.querySelector(".player-score");
const computer_score = document.querySelector(".computer-score");
let playerScore = 0;
let compScore = 0;

let getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    para2.innerText = "rock";
    return choices[0];
  } else if (rand === 1) {
    para2.innerText = "paper";
    return choices[1];
  } else {
    para2.innerText = "scissor";
    return choices[2];
  }
};

let getPlayerChoice = (playerChoice) => {
  playerChoice = playerChoice.toLowerCase();
  para1.innerText = playerChoice;
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    return playerChoice;
  }
};

let singleRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    para3.innerText = "it is a draw";
    return outcome[0];
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      para3.innerText = "computer won";
      return outcome[2];
    } else {
      para3.innerText = "player won";
      return outcome[1];
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      para3.innerText = "computer won";
      return outcome[2];
    } else {
      para3.innerText = "player won";
      return outcome[1];
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      para3.innerText = "computer won";
      return outcome[2];
    } else {
      para3.innerText = "player won";
      return outcome[1];
    }
  }
};

let calculateRes = (res) => {
  if (playerScore > 2 || compScore > 2) return;
  if (res === outcome[1]) {
    playerScore++;
    player_score.innerText = `Player: ${playerScore}`;
  } else if (res === outcome[2]) {
    compScore++;
    computer_score.innerText = `Computer: ${compScore}`;
  }
};

btns.forEach(
  (btn) =>
    btn.addEventListener("click", (e) => {
      let playerChoice = e.target.alt;
      let playerSelection = getPlayerChoice(playerChoice);
      let computerSelection = getComputerChoice();
      let result = singleRound(playerSelection, computerSelection);
      calculateRes(result);
      if (playerScore > 2) {
        para1.innerText = "";
        para2.innerText = "";
        para3.innerText = "";
        para4.innerText = "GAME OVER!!!!! Player Won!";
      } else if (compScore > 2) {
        para1.innerText = "";
        para2.innerText = "";
        para3.innerText = "";
        para4.innerText = "GAME OVER!!!!! Computer Won!";
      }
    }),
  true
);
