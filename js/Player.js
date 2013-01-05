function Player(type){
	this.type = type;
	this._hand = [];
	this._captured = [];
}

Player.prototype.addCardToHand = function(card){
    this._hand.push(card);
};

Player.prototype.addCardsToPile = function(stack) {

};