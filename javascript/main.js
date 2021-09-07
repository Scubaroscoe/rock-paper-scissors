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

// Handles all logic for playing one round
function playRound(e) {
	let playerChoice = e.target.textContent.toLowerCase();
	let computerChoice = computerPlay().toLowerCase();

	const paraPC = document.querySelector("#playerChoice");
	const paraCC = document.querySelector("#computerChoice");
	const paraResult = document.querySelector("#result");
	const paraWins = document.querySelector("#playerWins");
	const paraCompWins = document.querySelector("#computerWins");

	console.log(`You picked: ${playerChoice} and the computer picked: ${computerChoice}.`)
	paraPC.textContent = `Player chose: ${playerChoice}`
	paraCC.textContent = `Computer chose: ${computerChoice}`
	if (playerChoice === computerChoice) {
		console.log("It's a tie!");
		paraResult.textContent = "It's a tie!";
	} else {
		console.log(relativeResult(playerChoice, computerChoice));
		paraResult.textContent = relativeResult(playerChoice, computerChoice);
	}
	if (paraResult.textContent === "Player wins!") {
		totalPWins++;
	} else if (paraResult.textContent === "Player loses!") {
		totalCWins++;
	}

	paraWins.textContent = `Player wins: ${totalPWins}`;
	paraCompWins.textContent = `Computer wins: ${totalCWins}`;

	if (totalPWins >= 5) {
		alert("Player is first to win 5 rounds. Victor is player!");
	} else if (totalCWins >= 5) {
		alert("Computer is first to win 5 rounds. Victor is computer!");
	}
}

// Yes, you're right I could've incorporated this logic into playRound, or otherwise could've incorporated the tie from playround into here... Just didn't.
function relativeResult(player, computer) {
	if (player === "rock") {
		return (computer === "paper") ? "Player loses!" : "Player wins!";
	} else if (player === "paper") {
		return (computer === "scissors") ? "Player loses!" : "Player wins!";
	} else {
		return (computer === "rock") ? "Player loses!" : "Player wins!";
	}
}

// phasing this out
// function game() {
// 	let rpsArr = ["rock", "paper", "scissors"];
// 	let playerSelection;
// 	// for (let i = 0; i < 5; i++){
// 		let incorrectSelection = true;
// 		let gameCount = i + 1;
// 		while (incorrectSelection) {
// 			playerSelection = prompt(`Game ${gameCount}: rock, paper, or scissors?`);
// 			if (rpsArr.includes(playerSelection.toLowerCase())) {
// 				incorrectSelection = false;
// 			} else {
// 				alert(`Incorrect input. You input ${playerSelection}. Try again.`)
// 			}
// 		}
// 		let computerSelection = computerPlay();
// 		console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
// 	// }
// }

const buttons = document.querySelectorAll("button");
let totalPWins = 0;
let totalCWins = 0;
buttons.forEach(button => {
	// button.addEventListener('click', playRound(button.textContent.toLowerCase(), computerPlay().toLowerCase()));
	button.addEventListener('click', playRound);
})

// game();