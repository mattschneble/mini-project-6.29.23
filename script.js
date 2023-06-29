var rock = "rock";
var paper = "paper";
var scissors = "scissors";

var userChoice = prompt("Do you choose rock, paper or scissors?");
confirm("You chose " + userChoice + ". Is this correct?");
alert("Open the console to see the Computer's choice!")

var computerChoice = Math.floor(Math.random()*3);

if (computerChoice = 0) {
    computerChoice = rock;}
else if(computerChoice = 1) {
    computerChoice = paper;}
    else {computerChoice = scissors;};

console.log("Computer chose: " + computerChoice);

if (computerChoice==rock)
    {if (userChoice==rock)
        {alert("It's a tie!");}
    else if (userChoice==paper)
        {alert("You win!");}
    else if (userChoice==scissors)
        {alert("You lose!");}}

if (computerChoice==paper)
    {if (userChoice==paper)
        {alert("It's a tie!");}
    else if (userChoice==scissors)
        {alert("You win!");}
    else if (userChoice==rock)
        {alert("You lose!");}}

if (computerChoice==scissors)
    {if (userChoice==scissors)
        {alert("It's a tie!");}
    else if (userChoice==rock)
        {alert("You win!");}
    else if (userChoice==paper)
        {alert("You lose!");}}


