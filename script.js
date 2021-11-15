let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10);
};


const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    // wins who is closer to targetNumber.
    // if both, user and computer, tie the user should win.
    // true -> user, false -> computer

    console.log(`userGuess >> ${userGuess}`);
    console.log(`computerGuess >> ${computerGuess}`);
    console.log(`targetNumber >> ${targetNumber}`);

    if(userGuess < 0)
    {
        alert('Number out of range!');
        return;
    }
    let userPoints = getAbsoluteDistance(targetNumber, userGuess);
    let computerPoints = getAbsoluteDistance(targetNumber, computerGuess)

    // if(userPoints < 0)
    //     userPoints *= (-1);
    
    // if(computerPoints < 0)
    //     computerPoints *= (-1);

    return userPoints < computerPoints ? true : false;
};

const updateScore = (winner) => {
    if(winner === 'human')
        humanScore++;

    if(winner === 'computer')
        computerScore++;
};

const getAbsoluteDistance = (target, guess) => {
    let result = target - guess;
    return result < 0 ? result*(-1) : result;
};

// move to next round
// after finishing this function, you should be able to make guesses, see your or the comouter score increase correctly, move to the next round, and see the correct round displayed.
const advanceRound = () => {
    currentRoundNumber++;
};

/////////////////// Testing START

// for(i = 0; i < 10; i++)
// {
//     console.log(`Round ${currentRoundNumber}\n`);
//     console.log('Start');
//     console.log('\n');
    
//     let numTestRandom = generateTarget();
//     console.log(`numTestRandom >> ${numTestRandom}`);

//     let numTestUser = generateTarget();
//     console.log(`numTestUser >> ${numTestUser}`);

//     let numTestComputer= generateTarget();
//     console.log(`numTestComputer >> ${numTestComputer}`);

    
//     let result = compareGuesses(numTestUser, numTestComputer, numTestRandom);
    
//     if(result)
//     {
//         console.log('user won');
//         updateScore('human');
//     }
//     else
//     {
//         console.log('computer won');
//         updateScore('computer');
//     }
    
//     advanceRound();
    
    
    
    
    
//     console.log(`humanScore >> ${humanScore}`);
//     console.log(`computerScore >> ${computerScore}`);
//     console.log(`currentRoundNumber >> ${currentRoundNumber}`);

//     console.log('End');
//     console.log('------------------------------');
//     console.log('\n');
    
    
// }
/////////////////// Testing END
