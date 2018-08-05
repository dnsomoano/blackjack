// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }
// document.addEventListener('DOMContentLoaded', main)
// Starting arrays
const suits = ["clubs", "diamonds", "hearts", "spades"];
const ranks = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
];
// Parallel array
const valueArray = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// Game arrays
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
      // Object is created within deck array, creating an object array
      deck.push(cards = {
        // value equals the corresponding value within valueArray
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
};

// First hit for both players
const cardsDealt = () => {

  // Loop for player's hand
  for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
    // Loop for dealer's hand
    for (let dealerIndex = 0; dealerIndex < 1; dealerIndex++) {
      // pop, then push to the dealer's hand
      dealerHand.push(deck.pop());
    }
    // pop, then push to the player's hand
    playerHand.push(deck.pop());
    // Creates element in the Dom named newLi
    const newLi = document.createElement("li");
    // New line writes the player's hand calling the index values(playerIndex) each iteration
    newLi.textContent = "The player has " + playerHand[playerIndex].rank + " of " + playerHand[playerIndex].suit; // TODO fix displayed value of undefined
    // Calls new line back to the DOM
    document.querySelector("#random-result").appendChild(newLi);
  }
  // debug messages
  console.log(dealerHand);
  console.log(playerHand);

  //   Total value of player's hand
  let playerTotal = playerHand.value;
  for (let index = 0; index < playerHand.length; index++) {
    console.log(playerTotal);
  }
};

// mainline logic
const main = () => {
  createDeck();
  shuffle();
  cardsDealt();
};

const hitMe = () => {
	for (let playerIndex = 0; playerIndex < 1; playerIndex++) {
		playerHand.push(deck.pop());
		console.log(playerHand);
	}
	// if dealerHand values are less than 17, push another card
		// if dealerHand values are over 21, dealer loses and breaks out of function revealing cards
	// if playerHand values are over 21, the player loses
	// else continue
		// if playerHand values are greater than dealerHand values, then player wins
		// if dealerHand values are less than playerHand values, then dealer wins
		// else game ends in tie
}

// const exitGame = () = {
// 	clear the bucket
// }

// Event listeners
document.querySelector(".start-button").addEventListener("click", main);
document.querySelector(".hit-button").addEventListener("click", hitMe);
// document.querySelector("stand-button").addEventListener("click", exitGame)
