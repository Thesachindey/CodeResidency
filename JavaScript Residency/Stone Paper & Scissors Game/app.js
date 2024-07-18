let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg", "button");

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);//random number
    return option[randIdx];

};

const drawGame = () => {

    msg.innerText = "Game Was Draw! Play again";
    msg.style.color = "Black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! \n Your ${userChoice} Beats ${compChoice}`;
        msg.style.color = " rgb(9, 255, 0)";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! \n ${compChoice} Beats Your ${userChoice}`;
        msg.style.color = "#b30000";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    })
})