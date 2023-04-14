function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];    
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();    
  }

function playRound() {
    let scorePlayer = 0;
    let scorePC = 0;
    
    while ((scorePC + scorePlayer) < 5) {
        let player = prompt("This is a Rock, Paper and Scissors game. Make your choice: ").toLowerCase();
        let pc = getComputerChoice();

        if (player == pc) {
            alert("It is a draw!");
        }
        else {
            if (player == "rock" && pc == "paper") {
                alert("You lost!");
                scorePC++;
            }
            else if (player == "rock" && pc == "scissors") {
                alert("You won!");
                scorePlayer++;
            }
            else if (player == "paper" && pc == "scissors") {
                alert("You lost!");
                scorePC++;
            }
            else if (player == "paper" && pc == "rock") {
                alert("You won!");
                scorePlayer++;
            }
            else if (player == "scissors" && pc == "rock") {
                alert("You lost!");
                scorePC++;
            }
            else if (player == "scissors" && pc == "paper") {
                alert("You won!");
                scorePlayer++;
            }
        }
    }

    return "The players had these scores: User " + scorePlayer + " points and Computer " + scorePC + " points.";
}  

console.log(playRound());


  