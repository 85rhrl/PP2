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
        playGame(playerChoice);
    });
}

