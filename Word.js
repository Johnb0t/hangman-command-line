
var wordArray = [
	'cats',
	'DarkSouls',
	'ssh',
	'ups',
];

function chooseWord() {
	this.word = wordArray[Math.floor(Math.random() * wordArray.length)];
}
	


module.exports = wordArray;