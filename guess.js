/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

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
        throw "That is an invalid guess.";
      }
      this.playersGuess = guess;
      console.log(this.checkGuess());
      return this.checkGuess();
    },
    checkGuess: function () {
      if (this.playersGuess === this.winningNumber) {
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
      console.log("call for a new game");
      game = newGame();
      return game;
    },
    provideHint: function () {
      let hintArray = [this.winningNumber];
      let i = 1;
      while (i < 3) {
        hintArray.push(generateWinningNumber());
        i += 1;
      }
      shuffle(hintArray);
      return hintArray;
    },
  };

  return game;
}

/* function newGame() {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
  }
  
  newGame.newGame = function() {
      return new newGame;
  } */

let game = newGame();
console.log(game);
console.log(game.winningNumber);

console.log(game.provideHint());

// add event listeners to make the website interactive
// when the user submits a guess, it is saved inside the game object and checked against the winningNumber

let entryBlock1 = document.getElementById("entryBlock1");
let entryBlock2 = document.getElementById("entryBlock2");
entryBlock2.classList.toggle("hide");
let entryBlock3 = document.getElementById("entryBlock3");
entryBlock3.classList.toggle("hide");
let entryBlock4 = document.getElementById("entryBlock4");
entryBlock4.classList.toggle("hide");
let entryBlock5 = document.getElementById("entryBlock5");
entryBlock5.classList.toggle("hide");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");

let submitButton1 = document.getElementById("submit1");
let submitButton2 = document.getElementById("submit2");
let submitButton3 = document.getElementById("submit3");
let submitButton4 = document.getElementById("submit4");
let submitButton5 = document.getElementById("submit5");

let guess1 = document.getElementById("guess1");
let guess2 = document.getElementById("guess2");
let guess3 = document.getElementById("guess3");
let guess4 = document.getElementById("guess4");
let guess5 = document.getElementById("guess5");

let msg1 = document.getElementById("msg1");

submitButton1.addEventListener("click", function () {
  console.log("this is where the click event is called");
  console.log(game.playersGuessSubmission(guess1.value));
  msg1.textContent = "is this working";
  if (game.pastGuesses.length === 1) {
    entryBlock2.classList.toggle("hide");
  }

  /*   switch (game.pastGuesses.length) {
    case 1:
      entryBlock2.classList.toggle("hide");
      break;
    case 2:
      entryBlock3.classList.toggle("hide");
      break;
    case 3:
      let entryBlock4 = document.getElementById("entryBlock4");
      break;
    case 4:
      entryBlock5.classList.toggle("hide");
      break;
    case 5:
      guess5.textContent = game.pastGuesses[4];
      break;
  } */
  console.log(game.playersGuess);
  console.log(game.pastGuesses);
});

let resetButton = document.getElementById("reset");
console.log(resetButton);
resetButton.addEventListener("click", function () {
  console.log("reset button clicked");
  game = newGame();
  guess1.value = "";
  guess2.value = "";
  if (!entryBlock2.classList.contains("hide")) {
    entryBlock2.classList.toggle("hide");
  }

  guess3.value = "";
  if (!entryBlock3.classList.contains("hide")) {
    entryBlock3.classList.toggle("hide");
  }

  guess4.value = "";
  if (!entryBlock4.classList.contains("hide")) {
    entryBlock4.classList.toggle("hide");
  }

  guess5.value = "";
  if (!entryBlock5.classList.contains("hide")) {
    entryBlock5.classList.toggle("hide");
  }

  hintMessage.textContent = "";
});

let hintButton = document.getElementById("hint");
let hintMessage = document.getElementById("message");
let hintCount = 0;
hintButton.addEventListener("click", function () {
  hintMessage.textContent = "TRY ONE OF THESE: " + game.provideHint();
});
