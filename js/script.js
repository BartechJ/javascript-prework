{
const playGame = function(playerInput) {
  clearMessages();

  const getMoveName = function (argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
  
  }

  const displayResult = function(argComputerMove, argPlayerMove) {
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

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber); 
  printMessage('ruch komputera to: ' + computerMove);
  const playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);

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
  
  printMessage('Twój ruch to: ' + PlayerMove);
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

  displayResult(computerMove, playerMove);
}

const handleRockButton = function() {
  playGame(1);
};

const handlePaperButton = function() {
  playGame(2);
};

const handleScissorsButton = function() {
  playGame(3);
};

const playRockButton = document.getElementById('play-rock');
const playPaperButton = document.getElementById('play-paper');
const playScissorsButton = document.getElementById('play-scissors');

playRockButton.addEventListener('click', handleRockButton);
playPaperButton.addEventListener('click', handlePaperButton);
playScissorsButton.addEventListener('click', handleScissorsButton);
}