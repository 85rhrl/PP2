/* Declare constants for DOM elements */
const links = document.getElementsByClassName("choice");
const choices = ["rock", "paper", "scissors"];
let playerImage = document.getElementById("player-image");
let playerScore = document.getElementById("player-score");
let cpuImage = document.getElementById("cpu-image");
let cpuScore = document.getElementById("cpu-score");
let result = document.getElementById("result");

/* Add event listener to all links */
for (let link of links) {
    link.addEventListener("click", function () {
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

    let resultGame = checkWinner(playerChoice, choices[cpuChoice])
}

function checkWinner(player, cpu) {
    if (player === cpu) {
        result.textContent = "Tie";
    } else if (player === "rock") {
        if (cpu === "paper") {
            result.textContent = "CPU wins";
            cpuScore.innerText++;
        } else {
            result.textContent = "You win";
            playerScore.innerText++;
        }
    } else if (player === "paper") {
        if (cpu === "rock") {
            result.textContent = "You win";
            playerScore.innerText++;
        } else {
            result.textContent = "CPU wins";
            cpuScore.innerText++;
        }
    } else if (player === "scissors") {
        if (cpu === "rock") {
            result.textContent = "CPU wins";
            cpuScore.innerText++;
        } else {
            result.textContent = "You win";
            playerScore.innerText++;
        }
    }
}