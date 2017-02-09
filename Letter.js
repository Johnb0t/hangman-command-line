// Normal HW:

// Same as the challenge but message Pavan and he will send you the Letter and Word constructor files to use.

// Challenge:

// Overview

// In this assignment, you'll revisit the Hangman homework from week three and empower it with JavaScript constructors. Unlike the original front-end app, this Hangman 
// game will run entirely with Node.js using the inquirer package.

// Instructions

// Create a new GitHub repository called hangman-command-line, then clone it to your computer.

// Inside your local hangman-command-line folder, make files called Letter.js, Word.js and game.js.

// With the files from Step 2, you'll put together a console-based hangman app that incorporates objects, user-input and constructors in its solution.

// Both Letter.js and Word.js should be constructor files:
// Word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// Letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// game.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.
// Tips

// Program the game one piece at a time! Break the program down into fragments rather than chipping away little by little at giant, abstract problem.
// Focus on one part of the smaller problem and get some code working.
// Rinse and repeat (and remember, console.log is your friend).
// Try your best to deliver a working/playable game by the end of the deadline.
// Submit your app whether you finish or not; if you don't show us anything then we won't be able to help you with whatever programming issues you encountered this week.
// Working game > pretty dud. We're focusing on game mechanics, not just on the look and feel of your app.

var wordSelected = require('./Word.js');


var selectedWord = wordSelected.wordSelected;

var dashedWord = "";

console.log(selectedWord);

while (dashedWord.length < selectedWord.length * 2) {
	dashedWord += "_ ";
}


exports.dashedWord = dashedWord;
console.log(dashedWord);