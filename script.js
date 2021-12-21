let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
};

const compareGuesses = (a, b, targetGuess) => {
    let aDifference = Math.abs(a-targetGuess);
    let bDifference = Math.abs(b-targetGuess);
    if (aDifference === bDifference){
        return 'Draw';
    } else if (aDifference < bDifference) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if(winner === 'human'){
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};

