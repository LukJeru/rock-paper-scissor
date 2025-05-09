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

console.log(getComputerChoice())
getHumanChoice();

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
}
