/* Declare constants for DOM elements */
const buttons = document.getElementsByClassName("choice");
const choices = ["rock", "paper", "scissors"];
const playerImage = document.getElementById("player-image");
const playerScore = document.getElementById("player-score");
const cpuImage = document.getElementById("cpu-image");
const cpuScore = document.getElementById("cpu-score");

/* Add event listener to all buttons */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        mainGame(playerChoice);
    });
}

/* mainGame function */
function mainGame (playerChoice) {
    
    playerImage.src = `assets/images/${playerChoice}.png`;
    playerImage.alt = playerChoice;

    let cpuChoice = Math.floor(Math.random() * 3);
    cpuImage.src = `assets/images/${choices[cpuChoice]}.png`;
    cpuImage.alt = choices[cpuChoice];

    let result = checkWinner(playerChoice, choices[cpuChoice])
}


}