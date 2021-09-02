//have user pick rock, paper, or scissors. For now through prompts.
//have computer randomly select one of the three as well
// Compare selections
// same choice is tie 
// -> otherwise rock beats scissors
// -> scissors beats paper
// -> paper beats rock

function computerPlay() {
	let randChoice = Math.floor(Math.random() * 3);
	let compChoice;
	if (randChoice == 0) {
		compChoice = "Rock";
	} else if (randChoice == 1) {
		compChoice = "Paper";
	} else {
		compChoice = "Scissors";
	}
	return compChoice;
}

function playRound(playerSelection, computerSelection) {
	console.log(`You picked: ${playerSelection} and the computer picked: ${computerSelection}.`)
	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else {
		return relativeResult(playerSelection, computerSelection);
	}
}

function relativeResult(player, computer) {
	if (player === "rock") {
		return (computer === "paper") ? "Player loses!" : "Player wins!";
	} else if (player === "paper") {
		return (computer === "scissors") ? "Player loses!" : "Player wins!";
	} else {
		return (computer === "rock") ? "Player loses!" : "Player wins!";
	}
}

function game() {
	let rpsArr = ["rock", "paper", "scissors"];
	let playerSelection;
	for (let i = 0; i < 5; i++){
		let incorrectSelection = true;
		let gameCount = i + 1;
		while (incorrectSelection) {
			playerSelection = prompt(`Game ${gameCount}: rock, paper, or scissors?`);
			if (rpsArr.includes(playerSelection.toLowerCase())) {
				incorrectSelection = false;
			} else {
				alert(`Incorrect input. You input ${playerSelection}. Try again.`)
			}
		}
		let computerSelection = computerPlay();
		console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
	}
}

game();