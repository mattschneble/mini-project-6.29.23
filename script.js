var rock = "rock";
var paper = "paper";
var scissors = "scissors";

var userChoice = prompt("Do you choose rock, paper or scissors?");
confirm("You chose " + userChoice + ". Is this correct?");
var computerChoice = Math.random();

if (computerChoice < 0.33) {
    computerChoice = rock;}
else if(computerChoice > 0.34, and <= 0.67) {
    computerChoice = paper;}
    else {computerChoice = scissors;};

console.log("Computer: " + computerChoice);

var compare = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The result is a tie!";}
    else if (userChoice === rock) {
        if (computerChoice === scissors) {
            return "rock wins";}
        else {
            return "paper wins";}
    }
    else if (userChoice === paper) {
        if (computerChoice === rock) {
            return "paper wins";}
        else {
            return "scissors wins";}
    }
    else if (userChoice === scissors) {
        if (computerChoice === rock) {
            return "rock wins";}
        else {
            return "scissors wins";}
    }
}
