// Rock, Paper, or Scissors

const getUuserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
      } else {
        console.log('Error!');
      }
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      }
  }

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie !!'; 
    }

    if (userChoice === 'rock') {
            if ( computerChoice === 'paper') {
            return 'The computer won !!'
        } else {
            return 'You Won';
        }
    }

    if (userChoice === 'paper') {
        if ( computerChoice === 'scissors') {
        return 'The computer won !!'
    } else {
        return 'You Won';
    }

}
    if (userChoice === 'paper') {
            if ( computerChoice === 'scissors') {
            return 'The computer won !!'
        } else {
            return 'You Won';
        }
    }

    if (userChoice === 'scissors') {
        if ( computerChoice === 'rock') {
        return 'The computer won !!'
    } else {
        return 'You Won';
    }
}

}


const playGame = () => {
    let userChoice = getUuserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw : '+ userChoice);
    console.log('The computer threw : ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();