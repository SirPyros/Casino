function Player(type){
	this.type = type;
	this._hand = [];
	this._captured = [];
}

Player.prototype.addCardToHand = function(card){
    this._hand.push(card);
};

Player.prototype.addCardsToPile = function(stack) {
    var captured = this._captured;
    stack.forEach(function(element, index, array){
       captured.push(element);
    });
};

Player.prototype.dispose = function(){
    this._hand = null;
    this._captured = null;
};