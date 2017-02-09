 var inquirer = require('inquirer');
var Letter = require("./Letter.js");
var Word = require("./Word.js");

function checkWord() {
	inquirer.prompt([
		{
			type: "output",
			name: "dashedWord",
			message: "Guess the letters for this word " + Letter.dashedWord
		},
		{
			type: 'input',
			name: 'userGuess',
			message: 'Pick a letter: '

		}
])};

	checkWord();