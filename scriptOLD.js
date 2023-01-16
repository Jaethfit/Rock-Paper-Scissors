//***Global Variables. these are global variables because I call them within functions and then 
//   reference them within other variables

var playerChoice;
var computerChoice;
var playerScore = 0;
var computerScore = 0;



//***Computer Choice Section. This section applies a string based on a random number.
function getComputerChoice(computerChoiceInt) {
   computerChoiceInt = Math.floor(Math.random() * 3) +1;

if (computerChoiceInt === 1 ) {
    computerChoice = "rock";}

else if( computerChoiceInt === 2) {
    computerChoice = "paper";
}
else if( computerChoiceInt === 3) {
    computerChoice = "scissors";
}
console.log("computer chose",computerChoice)
}
//***Computer Choice Section

//***Game Logic. This function applies the getComputerChoice function and uses the variables to 
//   compare against player input similar to the following: rock > paper > scissors > rock.
function playRound()  {

getComputerChoice();
    playerChoice = prompt("choose your weapon");
    console.log(playerChoice);

        if (playerChoice === computerChoice) {
            console.log("you tied");
            console.log(playerScore, computerScore);
      
}
        else if (playerChoice === "rock" && computerChoice === "scissors") { 
            playerScore++;
                console.log("you win!");
                console.log(playerScore, computerScore);
}

        else if (playerChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
                console.log("you lose!");
                console.log(playerScore, computerScore);
            

}
        else if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore++;
                console.log ("you win!");
                console.log(playerScore, computerScore);
            
}
        else if (playerChoice === "rock" && computerChoice === "paper") {
            computerScore++;
                console.log ("you lose!");
                console.log(playerScore, computerScore);
            

}
        else if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore++;
                console.log ("you win!");
                console.log(playerScore, computerScore);
           
            
}
         else if (playerChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
                console.log ("you lose!");
                console.log(playerScore, computerScore);

            
}
}
//***Game Logic



//***Score Logic. This runs a for loop to count the number of times the game runs.  Once the game
//   runs 5 times, it counts the wins and losses and determines an overall winner.
function game() {
    for (let i =0; i<5; i++) { 
        playRound()
    
}

if (playerScore > computerScore) {
        console.log("you are the winner")
        
    }
else if (computerScore > playerScore) {
        console.log ("you lose today")
        
    }
else (console.log("all tied up"))

}
//***Score Logic


//***Run the game automatically
game();
//***Run the game automatically

