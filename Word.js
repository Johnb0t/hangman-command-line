 // * `Word.js` should contain all of the methods which will 
 // check the letters guessed versus the random word selected.
var letter = require("./letter.js");

var Word = function(word) {
	this.word = word;
	this.lettersArray = [];
	console.log("Here: " + word);
	for (var i = 0; i < this.word.length; i++) {
		//pass in each letter to letter.js and get letter(object)
		this.lettersArray.push(new letter(this.word[i]));
	}
	console.log(this.lettersArray);
		// console.log(lettersArray[0].);
	for (var l = 0; l < this.lettersArray.length; l++) {
		var currentLetter = this.lettersArray[l];
		console.log(currentLetter.show());
	}
}
Word.prototype.display = function() {
	this.string = "";

	for(var i = 0; i < this.lettersArray.length; i++) {
		this.string += lettersArray[i].letter;
		console.log(string);
		return this.string;
		

	}
	return this.string;
	console.log(this.string);
}
module.exports = Word;