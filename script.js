const rock = "Rock";

const paper = "Paper";

const scissors = "Scissors";

let computerScore = 0;

let playerScore = 0;

function playRound() {

let computerChoiceNum = Math.floor(Math.random() * 3)

let computerChoice;

function getComputerChoice() { if (computerChoiceNum === 0) {computerChoice = rock } 
else if (computerChoiceNum === 1) {computerChoice = paper } 
else {computerChoice = scissors} };

getComputerChoice();

let almostPlayerChoice = prompt("Rock, Paper, or Scissors?");

function playerCancelled() { if (almostPlayerChoice === null) {almostPlayerChoice = "invalid" }};

playerCancelled();

let playerChoice = almostPlayerChoice.toLowerCase();

let playerChoiceNum;

function getPlayerChoice() { if (playerChoice == "rock") {playerChoiceNum = 0}
else if (playerChoice === "paper") {playerChoiceNum = 1} else if (playerChoice === "scissors") {playerChoiceNum = 2}
else {playerChoiceNum = 3}
};

getPlayerChoice();

function round() { if (playerChoiceNum === 0 && computerChoiceNum === 0) {alert("A Tie! You both chose Rock!")} 
else if (playerChoiceNum === 0 && computerChoiceNum === 1) {alert("You Lose! Paper beats Rock!"); ++computerScore}
else if (playerChoiceNum === 0 && computerChoiceNum === 2) {alert("You Win! Rock beats Scissors!"); ++playerScore} 
else if (playerChoiceNum === 1 && computerChoiceNum === 0) {alert("You Win! Paper beats Rock!"); ++playerScore}
else if (playerChoiceNum === 1 && computerChoiceNum === 1) {alert("A Tie! You both chose Paper!")}
else if (playerChoiceNum === 1 && computerChoiceNum === 2) {alert("You Lose! Scissors beats Paper!"); ++computerScore}
else if (playerChoiceNum === 2 && computerChoiceNum === 0) {alert("You Lose! Rock beats Scissors!"); ++computerScore}
else if (playerChoiceNum === 2 && computerChoiceNum === 1) {alert("You Win! Scissors beats Paper!"); ++playerScore}
else if (playerChoiceNum === 2 && computerChoiceNum === 2) {alert("A Tie! You both chose Scissors!")}
else {alert("You entered and invalid input!"); ++computerScore}};

round();
 };

playRound();
playRound();
playRound();
playRound();
playRound();

function whoWins() { if (playerScore > computerScore) {alert(`You Win! The score was: ${playerScore} to ${computerScore}!`)}
else if (playerScore < computerScore) {alert(`You Lose! The score was: ${playerScore} to ${computerScore}!`)}
else {alert(`It was a Tie! The score was: ${playerScore} to ${computerScore}!`)} };

whoWins();





      

