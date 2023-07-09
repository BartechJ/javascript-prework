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

  /*
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Gracz wpisał: ' + playerInput);
  let argPlayerMove = getMoveName(playerInput);
  */

  if (playerInput == '1') {
    argPlayerMove = 'kamień';
  } else if (playerInput == '2') {
    argPlayerMove = 'papier';
  } else if (playerInput == '3') {
    argPlayerMove = 'nożyce';
  }

  printMessage('Twój ruch to: ' + argPlayerMove);

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

let PlayRockButton = document.getElementById('play-rock');
let PlayScissorsButton = document.getElementById('play-scissors');
let PlayPaperButton = document.getElementById('play-paper');

PlayRockButton.addEventListener('click', buttonClicked);
PlayPaperButton.addEventListener('click', buttonClicked2);
PlayScissorsButton.addEventListener('click', buttonClicked3);

function buttonClicked() {
  playGame(1);
}

function buttonClicked2() {
  playGame(2);
}

function buttonClicked3() {
  playGame(3);
}
