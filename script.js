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


function getHumanChoice() {
  let userChoice = prompt("Triff deine Wahl!");
}
