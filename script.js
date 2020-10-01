let btns = document.getElementById("btns");
let inputC = document.querySelector("#computerInput");
let inputU = document.querySelector("#userInput");
let scoreC = document.querySelector("#computerScore");
let scoreU = document.querySelector("#userScore");
let result = document.querySelector("#result");
let winner = document.getElementById("winner");
let playAgain = document.getElementById("playAgain");
let scoreboard = document.getElementById("scoreboard");

let scoreComputer = 0;
let scoreUser = 0;
let rounds = 3;

playAgain.onclick = function () {
    location.reload();
}

function play(button) {
    var random = Math.floor(1 + Math.random() * 3);
    inputU.className = "fa ";
    inputC.className = "fa ";

    scoreboard.style.display = "block";

    // User input is ROCK
    if (button.getAttribute("id") == "rock") {
        inputU.className += "fa-hand-rock-o";
        if (random == 1) {
            inputC.className += "fa-hand-rock-o";
            result.innerHTML = "Draw!";
        } else if (random == 2) {
            inputC.className += "fa-hand-paper-o";
            scoreComputer++;
            result.innerHTML = "You lose!";
        } else {
            inputC.className += "fa-hand-scissors-o";
            scoreUser++;
            result.innerHTML = "You win!";
        }
    }

    // User input is PAPER
    if (button.getAttribute("id") == "paper") {
        inputU.className += "fa-hand-paper-o";
        if (random == 1) {
            inputC.className += "fa-hand-rock-o";
            scoreUser++;
            result.innerHTML = "You win!";
        } else if (random == 2) {
            inputC.className += "fa-hand-paper-o";
            result.innerHTML = "Draw!";
        } else {
            inputC.className += "fa-hand-scissors-o";
            scoreComputer++;
            result.innerHTML = "You lose!";
        }
    }

    // User input is SCISSORS
    if (button.getAttribute("id") == "scissors") {
        inputU.className += "fa-hand-scissors-o";
        if (random == 1) {
            inputC.className += "fa-hand-rock-o";
            scoreComputer++;
            result.innerHTML = "You lose!";
        } else if (random == 2) {
            inputC.className += "fa-hand-paper-o";
            scoreUser++;
            result.innerHTML = "You win!";
        } else {
            inputC.className += "fa-hand-scissors-o";
            result.innerHTML = "Draw!";
        }
    }

    scoreC.innerHTML = scoreComputer;
    scoreU.innerHTML = scoreUser;

    if (scoreUser == rounds || scoreComputer == rounds) {
        result.innerHTML = "Game over!";
        btns.style.display = "none";
        playAgain.style.display = "block";

        if (scoreUser > scoreComputer) {
            winner.innerHTML = "You Won!";
            //result.innerHTML += "<br>Your Score: " + scoreUser + "<br> Computer Score:" + scoreComputer;
        } else {
            winner.innerHTML = "Computer Won!";
            //result.innerHTML += "<br>Your Score: " + scoreUser + "<br> Computer Score:" + scoreComputer;
        }
    }
}