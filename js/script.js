function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (
      (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
      (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') ||
      (argComputerMove === 'papier' && argPlayerMove === 'nożyce')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove === argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Komputer wygrywa');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let argComputerMove = getMoveName(randomNumber);
  printMessage('ruch komputera to: ' + argComputerMove);
  let argPlayerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + argPlayerMove);

  /*
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Gracz wpisał: ' + playerInput);
  */

  /*
  if (playerInput == '1') {
    argPlayerMove = 'kamień';
  } else if (playerInput == '2') {
    argPlayerMove = 'papier';
  } else if (playerInput == '3') {
    argPlayerMove = 'nożyce';
  }
  
  printMessage('Twój ruch to: ' + argPlayerMove);
  */

  /*
  if (computerMove === 'kamień' && playerMove === 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove === 'kamień' && playerMove === 'nożyce') {
    printMessage('Komputer wygrywa!');
  } else if (computerMove === 'papier' && playerMove === 'kamień') {
    printMessage('Komputer wygrywa!');
  } else if (computerMove === 'papier' && playerMove === 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove === 'nożyce' && playerMove === 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove === 'nożyce' && playerMove === 'papier') {
    printMessage('Komputer wygrywa!');
  } else if (computerMove === playerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Nieznany ruch. Spróbuj jeszcze raz.');
  }
  */

  displayResult(argComputerMove, argPlayerMove);
}

let playRockButton = document.getElementById('play-rock');
let playScissorsButton = document.getElementById('play-scissors');
let playPaperButton = document.getElementById('play-paper');

playRockButton.addEventListener('click', handleRockButton);
playPaperButton.addEventListener('click', handlePaperButton);
playScissorsButton.addEventListener('click', handleScissorsButton);

function handleRockButton() {
  playGame(1);
}

function handlePaperButton() {
  playGame(2);
}

function handleScissorsButton() {
  playGame(3);
}