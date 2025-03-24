let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 10);
  if (num <= 3) {
    console.log("Rock");
  } else if (num > 3 && num <= 6) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

function getHumanChoice() {
  let a = prompt("Enter your choice between Rock, Paper and Scissors");
  let buen = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  return buen;
}

function playRound(humanChoice, computerChoice) {
humanChoice=getHumanChoice();
computerChoice=getComputerChoice();
if (humanChoice=="Rock"&& computerChoice=="Paper") {
    console.log("You win! Rock beats Paper")
  
}
else {
  console.log("Will write later if the logic is deemed correct by Odin guys.")
}
  
}
const humanSelection = getHumanChoice();
const compSelection = getComputerChoice();
playRound(humanSelection,compSelection);

