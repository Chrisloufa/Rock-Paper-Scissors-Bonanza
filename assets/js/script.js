const game = () => {
let pScore = 0;
let cScore = 0;

document.addEventListener("DOMContentLoaded", function () {
    let allButtons = document.getElementsByTagName("button");
    for (let button of allButtons) {
        button.addEventListener("click", function () {
            let userAnswer = this.getAttribute("data-type");
            playGame(userAnswer);
            setTimeout(function () {
                returnGame(userAnswer);
            }, 400);
        });
    }
});

function playGame(userAnswer) {

    if (userAnswer === "Rock") {
        displayUserRock();
    } else if (userAnswer === "Paper") {
        displayUserPaper();
    } else if (userAnswer === "Scissors") {
        displayUserScissors();
    } else {
        alert(`Unknown game type: ${userAnswer}`);
        throw `Unknown game type: ${userAnswer}. Aborting!`;
    }
}

/**
 * Generates answer selected by user and displays correct image.
 */

function displayUserRock() {

    document.getElementById("user-image").src = "assets/images/user-rock.png";
}

function displayUserPaper() {

    document.getElementById("user-image").src = "assets/images/user-paper.png";

}

function displayUserScissors() {

    document.getElementById("user-image").src = "assets/images/user-scissors.png";
}

function returnGame(userAnswer) {

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score");
        const computerScore = document.querySelector(".computer-score");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      };

    let options = ["Rock", "Paper", "Scissors"];
    let randomComputerAnswer = options[Math.floor(Math.random() * options.length)];

    if (randomComputerAnswer === "Rock" && userAnswer === "Rock") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            updateScore();
            return;
        }, 10);

    } else if (randomComputerAnswer === "Rock" && userAnswer === "Paper") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            pScore++;
            updateScore();
            return;
        }, 10);

    } else if (randomComputerAnswer === "Rock" && userAnswer === "Scissors") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!`);
            cScore++;
            updateScore();
            return;
        }, 10);


    } else if (randomComputerAnswer === "Paper" && userAnswer === "Rock") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!`);
            cScore++;
            updateScore();
            return;
        }, 10);

    } else if (randomComputerAnswer === "Paper" && userAnswer === "Paper") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            updateScore();
            return;
        }, 10);

    } else if (randomComputerAnswer === "Paper" && userAnswer === "Scissors") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            pScore++;
            updateScore();
            return;
        }, 10);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Rock") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            pScore++;
            updateScore();
            return;
        }, 10);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Paper") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!`);
            cScore++;
            updateScore();
            return;
        }, 10);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Scissors") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            updateScore();
            return;
        }, 10);

    } else {
        alert(`Game error, please try again later.`);
        throw `Game error! Please investigate`;
    }

}

function displayComputerRock() {

    document.getElementById("computer-image").src = "assets/images/computer-rock.png";

}

function displayComputerPaper() {

    document.getElementById("computer-image").src = "assets/images/computer-paper.png";

}

function displayComputerScissors() {

    document.getElementById("computer-image").src = "assets/images/computer-scissors.png";

}
}

game();

/**
 * Gets the current tally of answers from the DOM and increments it by 1
 */

