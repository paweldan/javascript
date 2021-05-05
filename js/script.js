var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
    if (argMoveId == 2) {
      return 'papier';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
    if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);

    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') { 
      printMessage('Wygrywasz!');
     }
      else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz!');
      }
      else if (argPlayerMove == argComputerMove){
        printMessage('Remis!');
      }
    else {
      printMessage('Przegrywasz :(');
    }

    // if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    //   printMessage('Wygrywasz!');
    // } else {
    //   printMessage('Przegrywasz :(');
    // }
    // if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    //   printMessage('Wygrywasz!');
    // } else {
    //   printMessage('Przegrywasz :(');
    // }
    // if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    //   printMessage('Wygrywasz!');
    // } else {
    //   printMessage('Przegrywasz :(');
    // }
    // if (argPlayerMove == argComputerMove) {
    //   printMessage('Remis!');
    // } else {
    //   printMessage('Przegrywasz :(');
    // }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
argButtonName = document.getElementById('button-rock');
argButtonName.addEventListener('click', function () { buttonClicked('kamień'); });
argButtonName = document.getElementById('button-paper');
argButtonName.addEventListener('click', function () { buttonClicked('papier'); });
argButtonName = document.getElementById('button-scissors');
argButtonName.addEventListener('click', function () { buttonClicked('nożyce'); });