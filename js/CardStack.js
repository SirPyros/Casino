function CardStack(card){
	this._cards = [];
	this._cards.push(card);
	this.value = card.rank;
	this.locked = false;
}

CardStack.prototype.getCards = function(){
	return this._cards;
};

CardStack.prototype.getCardCount = function(){
	return this._cards.length;
};

CardStack.prototype.addCard = function(card, add, lock){
	this._cards.push(card);
	this.locked = lock;
};

CardStack.prototype.addStack = function(stack, add, lock){
	var cards = stack.getCards();
	cards.forEach(function(element, index, array){
		this._cards.push(element);
	});
	this.locked = lock;
	if(add) this.value += stack.value;
};

CardStack.prototype.canAddStack = function(cardStack){	
	return (this.locked && cardStack.Value == cardStack.Value) || cardStack.Value == cardStack.Value || cardStack.Value + Value <= 14;
};

CardStack.prototype.canAddCard = function(card){
	return this.canAddStack(new CardStack(card));
};

CardStack.prototype.dispose = function(){
	this._cards = null;
	this.value = null;
};


