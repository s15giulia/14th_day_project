/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function getSum(total, card) {
	if (card === "K" || card === "Q" || card === "J") {
		return total + 10; 
	}
	else if (card === "A"){
		return total + 1;
	}
	else {
		return total + parseInt(card);
	}
}

function aces(total, card){
	if (card === "A"){
		return total + 11; 
	}
	else {
		return total;
	}
}

function handValue (hand) {
	let value = hand.reduce(getSum, 0);
	let acesCount = hand.reduce(aces, 0);
		while (value > 21 && acesCount > 0){				
		value = value - 10; 
		acesCount = acesCount -1;	
}
	return value  
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/