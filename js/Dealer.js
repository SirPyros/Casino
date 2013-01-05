function Dealer()
{
	this._players = [];
	this._deck = [];
	this._board = [];
	this._playableDeck = [];
	this.firstHand = false;
}

Dealer.prototype.deal = function(){
	
};

Dealer.prototype.newGame = function(player1, player2){
	if(this._deck.length == 0) this.setupDeck();
	
	var _playableDeck = [];
	this._deck.forEach(function(element, index, array){
		_playableDeck.push(element);
	});
	this._playableDeck = _playableDeck;
	this.firstHand = true;
};

Dealer.prototype.setupDeck = function(){
	var suits = Object.keys(CardSuit);
	var ranks = Object.keys(CardRank);
	_deck = this._deck;
	suits.forEach(function(element, index, array){
		ranks.forEach(function(rElement, rIndex, rArray){
			_deck.push(new Card(CardSuit[element], CardRank[rElement]));
		});
	});
	
	this._deck.shuffle(10);
};