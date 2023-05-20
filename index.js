let getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    console.log("computer choice is rock");
    return "rock";
  } else if (rand === 1) {
    console.log("computer choice is paper");
    return "paper";
  } else {
    console.log("computer choice is scissors");
    return "scissors";
  }
};

let getPlayerChoice = () => {
  let playerChoice = prompt("Enter your choice between rock, paper and scissors: ");
  playerChoice = playerChoice.toLowerCase();
  if(playerChoice!== 'rock' && playerChoice!== 'paper' && playerChoice!== 'scissors'){
    prompt('Please enter a valid choice:')
  }
  return playerChoice;
};

let singleRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log("it is a draw");
    return "tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      console.log("computer won");
      return "comp";
    } else {
      console.log("player won");
      return "player";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      console.log("computer won");
      return "comp";
    } else {
      console.log("player won");
      return "player";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log("computer won");
      return "comp";
    } else {
      console.log("player won");
      return "player";
    }
  }
};

function game() {
  let playerScore = 0;
  let compScore = 0;
  for (i = 0; i < 5; i++) {
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    let res = singleRound(player, computer);
    if (res == "player") {
      playerScore++;
    } else if (res == "comp") {
      compScore++;
    }
  }

  if (playerScore > compScore) {
    console.log(
      `The score is ${playerScore}-${compScore} for the favour of  player so player is the ultimate winner`
    );
  } else if (compScore > playerScore) {
    console.log(
      `The score is ${compScore}-${playerScore} for the favour of  computer so computer is the ultimate winner`
    );
  } else {
    console.log("It is an ultimate draw");
  }
}

game();
