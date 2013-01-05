if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function(fn, scope) {
    for(var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  }
}

if ( !Array.prototype.shuffle ) {
  Array.prototype.shuffle = function(times) {
    for(var idx = 0; idx < times; idx++)
    {
    	for(var i = this.length - 1; i > 0; --i) {    		
      		var k = Math.floor(Math.random()*i);
      		var temp = this[i];
      		this[i] = this[k];
            	this[k] = temp;
    	}
    }
  }
}

if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
 
    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
 
      var result = [];
 
      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }
 
      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    }
  })()
};

function Card(cardSuit, cardRank){
	this.suit = cardSuit;
	this.rank = cardRank;
}

Card.prototype.getID = function(){
	return "Card" + this.suit + this.rank;
};

var CardRank ={
        "Ace" : 1,
        "Two" : 2,
        "Three" : 3,
        "Four" : 4,
        "Five" : 5,
        "Six" : 6,
        "Seven" : 7,
        "Eight" : 8,
        "Nine" : 9,
        "Ten" : 10,
        "Jack" : 11,
        "Queen" : 12,
        "King"  : 13       
};

Object.freeze(CardRank);

var CardSuit = {
	"Club" : 0,
        "Spade" : 1,
        "Heart" : 2,
        "Diamond" : 3
}

Object.freeze(CardSuit);
	