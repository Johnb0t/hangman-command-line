function LetterShow(letter, found) {
	this.letter = letter;
	this.found = false;
};
LetterShow.prototype.show = function () {
	if (this.found) return this.letter;
	else return "_";
}

module.exports = LetterShow;