let getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    para1.innerText = "computer choice is rock\n";
    return "rock";
  } else if (rand === 1) {
    para1.innerText = "computer choice is paper\n";
    return "paper";
  } else {
    para1.innerText = "computer choice is scissors\n";
    return "scissors";
  }
};

let getPlayerChoice = (playerChoice) => {
  playerChoice = playerChoice.toLowerCase();
  para2.innerText = `Player chose ${playerChoice}\n`;
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
    return "tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      para3.innerText = "computer won";
      return "comp";
    } else {
      para3.innerText = "player won";
      return "player";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      para3.innerText = "computer won";
      return "comp";
    } else {
      para3.innerText = "player won";
      return "player";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      para3.innerText = "computer won";
      return "comp";
    } else {
      para3.innerText = "player won";
      return "player";
    }
  }
};

let calculateScore = (res) => {
  if (playerScore === 5) {
    para4.innerText = "The player is the ultimate winner";
    return "player wins";
  } else if (compScore === 5) {
    para4.innerText = "The computer is the ultimate winner";
    return "comp wins";
  }

  if (res === "player") {
    playerScore++;
    para4.innerText = `player score: ${playerScore}`;
  } else if (res === "comp") {
    compScore++;
    para4.innerText = `comp score: ${compScore}`;
  }
};

let playerScore = 0;
let compScore = 0;
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const player = e.target.innerText;
    let playerChoice = getPlayerChoice(player);
    let compChoice = getComputerChoice();
    let res = singleRound(playerChoice, compChoice);
    calculateScore(res);
  });
});

const container = document.querySelector(".container");
const div = document.createElement("div");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("p");
div.appendChild(para1);
div.appendChild(para2);
div.appendChild(para3);
div.appendChild(para4);
container.appendChild(div);
