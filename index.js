let getComputerChoice=()=>{
    let rand=Math.floor(Math.random()*3)
    if(rand===0){
        console.log('computer choice is rock')
        return('rock');
    }else if(rand===1){
        console.log('computer choice is paper')
        return('paper');
    }else{
        console.log('computer choice is scissors')
        return('scissors')
    }

}

let getPlayerChoice=()=>{
    let playerChoice=prompt('Enter your choice: ');
    playerChoice=playerChoice.toLowerCase();
    return playerChoice;

}


let singleRound=(playerSelection,computerSelection)=>{
    if(playerSelection===computerSelection){
        return 'it is tie'
    }else if(playerSelection=='rock'){
        if(computerSelection=='paper'){
            return 'computer won'
        }else{
            return 'player won'
        }
    }else if(playerSelection=='paper'){
        if (computerSelection=='scissors'){
            return('computer won')
        }else{
            return 'player won'
        }
    }else if(playerSelection=='scissors'){
        if (computerSelection=='rock'){
            return 'computer won'
        }else{
            return 'player won'
        }
    }

}
let p=getPlayerChoice();
let c=getComputerChoice();
console.log(singleRound(p,c))