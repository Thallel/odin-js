let scorePlayer = 0;
let scorePC = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];    
  return choices[Math.floor(Math.random() * choices.length)].toLowerCase();    
}

function updateScore() {
  // atualizar os placares na tela
  document.getElementById("user-score").innerHTML = scorePlayer;
  document.getElementById("computer-score").innerHTML = scorePC;
}

function playRound(choice) {  
  let player = choice;
  let pc = getComputerChoice();

  if (player == pc) {
    alert("It is a draw!");
  } else {
    if (player == "rock" && pc == "paper") {
      alert("You lost!");
      scorePC++;
    } else if (player == "rock" && pc == "scissors") {
      alert("You won!");
      scorePlayer++;
    } else if (player == "paper" && pc == "scissors") {
      alert("You lost!");
      scorePC++;
    } else if (player == "paper" && pc == "rock") {
      alert("You won!");
      scorePlayer++;
    } else if (player == "scissors" && pc == "rock") {
      alert("You lost!");
      scorePC++;
    } else if (player == "scissors" && pc == "paper") {
      alert("You won!");
      scorePlayer++;
    }
    
    updateScore();
  }
}  

// buttons é uma lista de elementos. Parece e age como uma array.
const buttons = document.querySelectorAll('button');

// iterar por cada botão
buttons.forEach((button) => {
  // adicionar um evento de clique em cada botão
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});







  