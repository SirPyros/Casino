function Dealer()
{
	this._players = [];
	this._deck = [];
	this._board = [];
	this._playableDeck = [];
	this._firstHand = false;
}

Dealer.prototype.deal = function(){
	var playerIdx = 0;
    for(var idx=0;idx < 8; idx++){
        this._players[playerIdx].addCardToHand(this._playableDeck.pop());
        playerIdx++;
        if (playerIdx == this._players.length)
            playerIdx = 0;
    }

    if(this._firstHand){
        for(var idx=0;idx < 4; idx++){
            this._board.push(new CardStack(this._playableDeck.pop()));
        }
    }
};

Dealer.prototype.newGame = function(player1, player2){
	if(this._deck.length == 0) this.setupDeck();
	
	var _playableDeck = [];
	this._deck.forEach(function(element, index, array){
		_playableDeck.push(element);
	});
	this._playableDeck = _playableDeck;
    this._board = [];
    this._players = [player1, player2];
	this._firstHand = true;
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