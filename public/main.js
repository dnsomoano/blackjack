// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }
// document.addEventListener('DOMContentLoaded', main)
// Starting arrays
const suits = [ 'clubs', 'diamonds', 'hearts', 'spades' ];
const ranks = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];
// Parallel array
const valueArray = [ 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10 ];

let deck = [];
const playerHand = [];
const dealerHand = [];

// Creates array of deck
const createDeck = () => {
	// First loop = 13 * Second loop 4 = 52 loops
	// First loop
	deck = [];
	for (let i = 0; i < ranks.length; i++) {
		// second loop
		for (let j = 0; j < suits.length; j++) {
			// Bucket for temporary values
			deck.push({
				value: valueArray[i],
				rank: ranks[i],
				suit: suits[j]
			});
		}
	}
	// Call list of cards
	console.log(deck);
	// Call length of array to confirm 52 cards
	console.log(deck.length);
};

// Fisher-Yates Shuffle
let shuffle = () => {
	// For loop will loop 52x
	for (let i = 0; i < deck.length; i++) {
		const j = Math.floor(Math.random() * i);
		// temporary bucket for array deck
		const temp = deck[j];
		// value which dumped into temporary is overwritten
		deck[j] = deck[i];
		// temporary bucket overwrites the previous array that overwrote
		deck[i] = temp;
	}
	// pop method removes the last element in the array deck
};
const cardsDealt = () => {
	// Loop for dealer's hand
	for (let dealerIndex = 0; dealerIndex < 2; dealerIndex++) {
		dealerHand.push(deck.pop());
		//
		const newLi = document.createElement('li');
		// New line writes the last element named hand
		newLi.textContent = dealerHand.rank + ' of ' + dealerHand.suit;
		// Calls new line back to the DOM
		document.querySelector('#random-result').appendChild(newLi);
		console.log(dealerHand);
	}

	// Loop for player's hand
	for (let playerIndex = 0; playerIndex < 2; playerIndex++) {

		playerHand.push(deck.pop());

		// debug message for pop value
		console.log(playerHand);

		// Create new line element for result
		const newLi = document.createElement('li');

		// New line writes the last element named hand
		newLi.textContent = playerHand.rank + ' of ' + playerHand.suit;

		// Calls new line back to the DOM
		document.querySelector('#random-result').appendChild(newLi);
	}

	// Total value of player's hand
	// let playerTotal ;
	// for (let index = 0; index < playerHand.length; index++) {
	// 	console.log( playerHand[index].value);
	// }
	// console.log(playerHand.value);
	// //console.log(playerTotal);
};

const main = () => {
	createDeck();
	shuffle();
	cardsDealt();
};

// };
// const exitGame = () = {

// }

// Event listeners
document.querySelector('.hit-button').addEventListener('click', main);
// document.querySelector("stand-button").addEventListener("click", exitGame)
