const rock = "Rock";

const paper = "Paper";

const scissors = "Scissors";

let computerChoiceNum = Math.floor(Math.random() * 3)

let computerChoice;

function getComputerChoice() { if (computerChoiceNum === 0) {computerChoice = rock } 
else if (computerChoiceNum === 1) {computerChoice = paper } 
else {computerChoice = scissors} };

getComputerChoice();

console.log(computerChoice);
      

