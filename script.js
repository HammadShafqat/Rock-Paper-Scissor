// Selecting elements for each choice (rock, paper, scissor) and score display
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let usrScr = document.querySelector("userScore");
let comScr = document.querySelector("compScore");
let usrScrCount = 0;
let comScrCount = 0;

// Function to generate a random number between 1 and 3 for computer's choice
function randomNumber() {
    let start = 1;
    let end = 3;
    let rndNbr = Math.floor(Math.random() * (end - start + 1)) + start;
    return rndNbr;
}

// Function for "Rock" choice
let forRock = () => {
    let rndNbr = randomNumber();
    if (rndNbr == 1) { // Computer also chose rock
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
        msg.innerText = "It was DRAW.";
    } else if (rndNbr == 2) { // Computer chose paper
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        msg.innerText = "You LOST. Paper beats Rock!";
        comScrCount++;
        compScore.innerText = comScrCount;
    } else { // Computer chose scissor
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        msg.innerText = "You WON. Rock beats Scissor!";
        usrScrCount++;
        userScore.innerText = usrScrCount;
    }
};
rock.addEventListener("click", forRock);

// Function for "Paper" choice
let forPaper = () => {
    let rndNbr = randomNumber();
    if (rndNbr == 1) { // Computer chose rock
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        msg.innerText = "You Win. Paper beats Rock!";
        usrScrCount++;
        userScore.innerText = usrScrCount;
    } else if (rndNbr == 2) { // Computer also chose paper
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
        msg.innerText = "It was DRAW.";
    } else { // Computer chose scissor
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        msg.innerText = "You Lost. Scissor beats Paper!";
        comScrCount++;
        compScore.innerText = comScrCount;
    }
};
paper.addEventListener("click", forPaper);

// Function for "Scissor" choice
let forScissor = () => {
    let rndNbr = randomNumber();
    if (rndNbr == 1) { // Computer chose rock
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        msg.innerText = "You LOST. Rock beats Scissor!";
        comScrCount++;
        compScore.innerText = comScrCount;
    } else if (rndNbr == 2) { // Computer chose paper
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        msg.innerText = "You WON. Scissor beats Paper!";
        usrScrCount++;
        userScore.innerText = usrScrCount;
    } else { // Computer also chose scissor
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
        msg.innerText = "It was DRAW.";
    }
};
scissor.addEventListener("click", forScissor);
