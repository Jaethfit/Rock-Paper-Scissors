

var playerChoiceString;
var computerScore = 0;
var playerScore = 0;
var computerChoiceInt;
var cpuText;
var winner;






//Made individual function blocks for each player choice for ease of readability

function addRock(){
    const rock = document.getElementById('rock');
    playerChoiceString = "Rock";
    console.log(`${playerChoiceString}`);
    playGame();
    document.getElementById("playerChoiceString").textContent = playerChoiceString;
    return "rock";
}
function addPaper(){
    const paper = document.getElementById('paper');
    playerChoiceString = "Paper";
    console.log(`${playerChoiceString}`);
    playGame();
    document.getElementById("playerChoiceString").textContent = playerChoiceString;
    return "paper";

}
function addScissors(){
    const scissors = document.getElementById('scissors');
    playerChoiceString = "Scissors";
    console.log(`${playerChoiceString}`);
    playGame();
    document.getElementById("playerChoiceString").textContent = playerChoiceString;
    return "scissors";
    

}
/***/

//This function converts from a random int to a string instead of an array because of readability by others
function getComputerChoice(computerChoiceInt) {

    computerChoiceInt = Math.floor(Math.random() * 3) +1;
 
 if (computerChoiceInt === 1 ) {
     cpuText = "Rock";
    }
 
 else if( computerChoiceInt === 2) {
     cpuText = "Paper";
 }
 else if( computerChoiceInt === 3) {
     cpuText = "Scissors";
 }
 console.log("computer chose",cpuText)
 document.getElementById("cpuText").textContent = cpuText;


 }


// This function plays one round of the game by comparing the two strings and determining a winner. 
function playRound() {

    getComputerChoice();
        if (playerChoiceString === cpuText) {
            console.log("you tied");
      
}
        else if (playerChoiceString === "Rock" && cpuText === "Scissors") { 
            playerScore++;
            console.log(playerScore,computerScore);
            

}

        else if (playerChoiceString === "Scissors" && cpuText === "Rock") {
            computerScore++;
            console.log(playerScore,computerScore);
            

}
        else if (playerChoiceString === "Paper" && cpuText === "Rock") {
            playerScore++;
            console.log(playerScore,computerScore);
            
}
        else if (playerChoiceString === "Rock" && cpuText === "Paper") {
            computerScore++;
            console.log(playerScore,computerScore);

}
        else if (playerChoiceString === "Scissors" && cpuText === "Paper") {
            playerScore++;
            console.log(playerScore,computerScore);
            
}
         else if (playerChoiceString === "Paper" && cpuText === "Scissors") {
            computerScore++;
            console.log(playerScore,computerScore);
}
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;

}


function playGame() {

    playRound();
if (playerScore == 5) {
    console.log("you win");
    let winner = "You win! Congratulations!";
    reset();

    console.log(winner);
    document.getElementById("winner").textContent = winner;
}
else if (computerScore == 5) {
    console.log("you lose");
    let winner = "You lost! Maybe go touch grass?";
    reset();
    console.log(winner);
    document.getElementById("winner").textContent = winner;
}

 
}
function reset() {
    playerScore = 0;
    computerScore = 0;


}


