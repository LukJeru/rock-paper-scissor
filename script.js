//computer choice depending on a random number from 0 to 2
function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "Stein";
  } else if (number === 1) {
    return "Papier";
  } else {
    return "Schere";
  }

}


//function runs until the user puts in a valid choice
function getHumanChoice() {
  const choices = ["stein", "schere", "papier"];
  let userChoice;
  do {
    userChoice = prompt("Triff deine Wahl!");
    //format user input so it can later be compared with computer choice
    userChoice = userChoice.toLowerCase().split(""); //split() turns string to array
    userChoice[0] = userChoice[0].toUpperCase();
    userChoice = userChoice.join(""); //join("") turns array in a string with no whitespace
    if (choices.includes(userChoice.toLowerCase())) {
      console.log(`Input accepted, you chose ${userChoice}`)
    } else {
      console.log(`Invalid input: ${userChoice}. Choose one of the following: Schere, Stein, Papier.`)
    }
  } while(!choices.includes(userChoice.toLowerCase()))
  return userChoice;
}

//function to play the game
function playRound() {
  //save choices in two variables
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  console.log(`Computer choice: ${computerChoice} human choice: ${humanChoice}`);
  //compare choices and determine who wins
  //check for a draw
  if(computerChoice === humanChoice) {
    console.log("Draw. Nobody gets any points.")
  } else if(computerChoice === "Schere") {
    if(humanChoice === "Papier") {
      console.log("You loose the computer gets a point.");
      computerScore++;
    } else {
      console.log("You won and get a point.");
      humanScore++;
    }
  } else if(computerChoice === "Stein") {
    if(humanChoice === "Schere") {
      console.log("You loose the computer gets a point.");
      computerScore++;
    } else {
      console.log("You won and get a point.");
      humanScore++;
    }
  } else { //if it's not a draw and the computer chose neither schere nor stein, paper is the only possibility left
    if(humanChoice === "Stein") {
      console.log("You loose the computer gets a point.");
      computerScore++;
    } else {
      console.log("You won and get a point.");
      humanScore++;
    }
  }
}

//score variables
let humanScore = 0;
let computerScore = 0;

//for-loop to play five rounds
for(let i = 0; i < 5; i++) {
  playRound();
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}
//function call to play
