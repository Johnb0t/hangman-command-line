var inquirer = require("inquirer");
var Word = require("./Word.js");
var Letter = require("./Letter.js");
var colors = require("colors");

var wordArray = ["Dark Souls", "Conan Exiles", "Overwatch", "Rainbow Six Siege", "Binding of Isaac"];

// Make global var's for lives, guessarray, letter array getWord and word. than make a startgame func. Maybe????
//In restart func. reset global vars.

var getWord;
var word;
var lives = 10;
var guessesArray = [];
var lettersArray = [];

var startGame = function() {
	getWord = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
	word = getWord.word;
	word = word.toUpperCase();
	
	console.log("=======================================");
	console.log("Welcome To The Video Game Hangman Game!");
	console.log("=======================================");
	console.log("  Guess the word, you may need spaces");
	console.log("=======================================");
	// var lives = 10;

	for (var i = 0; i < word.length; i++) {
		lettersArray.push(new Letter(word[i]));
	};

	getGuess(getWord, lettersArray);
}


var getGuess = function() {
	// displayWord(lettersArray);
	inquirer.prompt({
		type: "input",
		name: "guess",
		message: "What is your guess: "
	}).then(function(data) {
		var letterUp = data.guess.toUpperCase();
		guessesArray.push(letterUp);

		console.log(getWord.check(data.guess.toUpperCase(), lettersArray));

		if (getWord.check(data.guess.toUpperCase(), lettersArray) == true) {
			console.log("Letter Found!");
			displayWord(lettersArray);
		} else {
			lives --;
			if (lives > 0) {
				console.log("Wrong. Guess again!");
				console.log(lives + " lives remaining.");
			} else {
				console.log("Out of lives. Game over.");
			};
		};

		if (getWord.isSolved(lettersArray) == false) {
			if (lives > 0) {
				console.log("Guesses: " + guessesArray);
				getGuess(getWord, lettersArray);
			};
		} else {
			displayWord(lettersArray);
			console.log("You guessed the word!")
		};
	});
};

var displayWord = function() {
	var wordToShow = "";
	for (var i = 0; i < lettersArray.length; i++) {
		wordToShow += lettersArray[i].show() + " ";
	};
	console.log(wordToShow);
};



startGame();