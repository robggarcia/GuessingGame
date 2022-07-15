// define a function to randomly generate the winning number (between 1 and 100)
// input: none
// output: an integer
function generateWinningNumber() {
  let newNumber = Math.floor(Math.random() * 100) + 1;
  return newNumber;
}

// define a function to shuffle a given array
// input: an array of numbers
// output: the array shuffled in place
function shuffle(arr) {
  let m = arr.length,
    t,
    i;
  // while there remains elements to shuffle
  while (m) {
    // pick a remaining element
    i = Math.floor(Math.random() * m--);
    // swap it with the current element
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}

// define a function newGame that returns a new game object when invoked
function newGame() {
  let game = {
    playersGuess: null,
    pastGuesses: [],
    winningNumber: generateWinningNumber(),
    difference: function () {
      return Math.abs(this.playersGuess - this.winningNumber);
    },
    isLower: function () {
      if (this.playersGuess < this.winningNumber) {
        return true;
      }
      return false;
    },
    playersGuessSubmission: function (guess) {
      if (guess > 100 || guess < 1 || isNaN(guess)) {
        // throw "That is an invalid guess.";
        return "That is an invalid guess.";
      }
      this.playersGuess = guess;
      return this.checkGuess();
    },
    checkGuess: function () {
      if (this.playersGuess == this.winningNumber) {
        return "You Win!";
      }
      if (this.pastGuesses.includes(this.playersGuess)) {
        return "You have already guessed that number.";
      }
      this.pastGuesses.push(this.playersGuess);

      console.log(this.pastGuesses);
      if (this.pastGuesses.length === 5) {
        return "You Lose";
      }
      if (this.difference() < 10) {
        return "You're burning up!";
      } else if (this.difference() < 25) {
        return "You're lukewarm.";
      } else if (this.difference() < 50) {
        return "You're a bit chilly.";
      } else if (this.difference() < 100) {
        return "You're ice cold!";
      }
    },
    newGame: function () {
      game = newGame();
      return game;
    },
    provideHint: function () {
      return shuffle([
        this.winningNumber,
        generateWinningNumber(),
        generateWinningNumber(),
      ]);
    },
  };

  return game;
}

let game = newGame();
// console.log(game);
// console.log(game.winningNumber);
// console.log(game.provideHint());

// add event listeners to make the website interactive
// when the user submits a guess, it is saved inside the game object and checked against the winningNumber
let entryBlock = document.getElementsByClassName("entry");
entryBlock[1].classList.toggle("hide");
entryBlock[2].classList.toggle("hide");
entryBlock[3].classList.toggle("hide");
entryBlock[4].classList.toggle("hide");

let body = document.querySelector("body");

let column = document.getElementsByClassName("col");
let input = document.getElementsByClassName("input");
let submitButton = document.getElementsByClassName("submit");
let msg = document.getElementsByClassName("message");
let defaultMessage = "PICK A NUMBER BETWEEN 1 AND 100";

// EVENT LISTENERS FOR EACH NEW SUBMIT BUTTON
submitButton[0].addEventListener("click", function () {
  msg[0].textContent = game.playersGuessSubmission(input[0].value);

  if (game.playersGuess == game.winningNumber) {
    hintMessage.textContent = "CONGRATULATIONS!";
    body.classList.toggle("blink");
  } else if (game.pastGuesses.length === 1) {
    column[0].classList.toggle("g-col");
    input[0].classList.toggle("g-col");
    entryBlock[1].classList.toggle("hide");
    submitButton[0].disabled = true;
    hintButton.disabled = false;
    if (game.isLower()) {
      hintMessage.textContent = "GUESS HIGHER";
    } else {
      hintMessage.textContent = "GUESS LOWER";
    }
  } else {
    input[0].value = "";
  }

  console.log(game.playersGuess);
  console.log(game.pastGuesses);
});

submitButton[1].addEventListener("click", function () {
  msg[1].textContent = game.playersGuessSubmission(input[1].value);

  if (game.playersGuess == game.winningNumber) {
    hintMessage.textContent = "CONGRATULATIONS!";
    body.classList.toggle("blink");
  } else if (game.pastGuesses.length === 2) {
    column[1].classList.toggle("u-col");
    input[1].classList.toggle("u-col");
    entryBlock[2].classList.toggle("hide");
    submitButton[1].disabled = true;
    hintButton.disabled = false;
    if (game.isLower()) {
      hintMessage.textContent = "GUESS HIGHER";
    } else {
      hintMessage.textContent = "GUESS LOWER";
    }
  } else {
    input[1].value = "";
  }

  console.log(game.playersGuess);
  console.log(game.pastGuesses);
});

submitButton[2].addEventListener("click", function () {
  msg[2].textContent = game.playersGuessSubmission(input[2].value);

  if (game.playersGuess == game.winningNumber) {
    hintMessage.textContent = "CONGRATULATIONS!";
    body.classList.toggle("blink");
  } else if (game.pastGuesses.length === 3) {
    column[2].classList.toggle("e-col");
    input[2].classList.toggle("e-col");
    entryBlock[3].classList.toggle("hide");
    submitButton[2].disabled = true;
    hintButton.disabled = false;
    if (game.isLower()) {
      hintMessage.textContent = "GUESS HIGHER";
    } else {
      hintMessage.textContent = "GUESS LOWER";
    }
  } else {
    input[2].value = "";
  }

  console.log(game.playersGuess);
  console.log(game.pastGuesses);
});

submitButton[3].addEventListener("click", function () {
  msg[3].textContent = game.playersGuessSubmission(input[3].value);

  if (game.playersGuess == game.winningNumber) {
    hintMessage.textContent = "CONGRATULATIONS!";
    body.classList.toggle("blink");
  } else if (game.pastGuesses.length === 4) {
    column[3].classList.toggle("s1-col");
    input[3].classList.toggle("s1-col");
    entryBlock[4].classList.toggle("hide");
    submitButton[3].disabled = true;
    hintButton.disabled = false;
    if (game.isLower()) {
      hintMessage.textContent = "GUESS HIGHER";
    } else {
      hintMessage.textContent = "GUESS LOWER";
    }
  } else {
    input[3].value = "";
  }

  console.log(game.playersGuess);
  console.log(game.pastGuesses);
});

submitButton[4].addEventListener("click", function () {
  msg[4].textContent = game.playersGuessSubmission(input[4].value);

  if (game.playersGuess == game.winningNumber) {
    hintMessage.textContent = "CONGRATULATIONS!";
    body.classList.toggle("blink");
  } else if (game.pastGuesses.length === 5) {
    column[4].classList.toggle("s2-col");
    input[4].classList.toggle("s2-col");
    submitButton[4].disabled = true;
    hintButton.disabled = true;
    hintMessage.textContent = "RESET TO PLAY AGAIN";
  } else {
    input[4].value = "";
  }

  console.log(game.playersGuess);
  console.log(game.pastGuesses);
});

// RESET BUTTON
let resetButton = document.getElementById("reset");

console.log(resetButton);
resetButton.addEventListener("click", function () {
  console.log("reset button clicked");
  game = newGame();
  input[0].value = "";
  input[1].value = "";
  input[2].value = "";
  input[3].value = "";
  input[4].value = "";

  msg[0].textContent = defaultMessage;
  msg[1].textContent = defaultMessage;
  msg[2].textContent = defaultMessage;
  msg[3].textContent = defaultMessage;
  msg[4].textContent = defaultMessage;

  if (submitButton[0].disabled) {
    column[0].classList.toggle("g-col");
    input[0].classList.toggle("g-col");
  }
  if (submitButton[1].disabled) {
    column[1].classList.toggle("u-col");
    input[1].classList.toggle("u-col");
  }
  if (submitButton[2].disabled) {
    column[2].classList.toggle("e-col");
    input[2].classList.toggle("e-col");
  }
  if (submitButton[3].disabled) {
    column[3].classList.toggle("s1-col");
    input[3].classList.toggle("s1-col");
  }
  if (submitButton[4].disabled) {
    column[4].classList.toggle("s2-col");
    input[4].classList.toggle("s2-col");
  }

  if (!entryBlock[1].classList.contains("hide")) {
    entryBlock[1].classList.toggle("hide");
  }

  if (!entryBlock[2].classList.contains("hide")) {
    entryBlock[2].classList.toggle("hide");
  }

  if (!entryBlock[3].classList.contains("hide")) {
    entryBlock[3].classList.toggle("hide");
  }

  if (!entryBlock[4].classList.contains("hide")) {
    entryBlock[4].classList.toggle("hide");
  }

  if (body.classList.contains("blink")) {
    body.classList.toggle("blink");
  }

  hintButton.disabled = false;
  submitButton[0].disabled = false;
  submitButton[1].disabled = false;
  submitButton[2].disabled = false;
  submitButton[3].disabled = false;
  submitButton[4].disabled = false;

  hintMessage.textContent = "";
});

// HINT BUTTON
let hintButton = document.getElementById("hint");
let hintMessage = document.getElementById("message");
let hintCount = 0;
hintButton.addEventListener("click", function () {
  let newHint = game.provideHint();
  console.log(newHint);
  hintMessage.textContent = `TRY EITHER ${newHint[0]}, ${newHint[1]}, OR ${newHint[2]}`;
  hintButton.disabled = true;
});
