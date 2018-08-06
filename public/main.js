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
const deck = [];
const playerHand = [];
const dealerHand = [];
let playerTotal;
let dealerTotal;

const init = () => {
  playerHand.splice(0, playerHand.length);
  dealerHand.splice(0, dealerHand.length);
  playerTotal = 0;
  dealerTotal = 0;
  deck.splice(0, deck.length);
};
init();
// const getPlayerTotal = () => {
//   let playerTotal = playerHand[0].value + playerHand[1].value;
// }

const playAgain = () => {
  const playAgainButton = document.createElement("button");
  playAgainButton.addEventListener("click", function () {
    window.location.reload();
  }); // TODO fix play again button
  playAgainButton.textContent = "Play Again?";
  document.querySelector("#random-result").appendChild(playAgainButton);
  // window.location.reload();
};
  
// Creates array of deck
const createDeck = () => {
  // First loop = 13 * Second loop 4 = 52 loops
  // First loop
  deck.splice(0, deck.length);
  for (let i = 0; i < ranks.length; i++) {
    // second loop
    for (let j = 0; j < suits.length; j++) {
      // Object is created within deck array, creating an object array
      deck.push({
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
    // now playerTotal is initiated
    // Creates element in the Dom named newLi
    const newLi = document.createElement("li");
    // New line writes the player's hand calling the index values(playerIndex) each iteration
    newLi.textContent =
      "The player has " +
      playerHand[playerIndex].rank +
      " of " +
      playerHand[playerIndex].suit;
    // Calls new line back to the DOM
    document.querySelector("#random-result").appendChild(newLi);
  }
  playerTotal = parseInt(playerHand[0].value + playerHand[1].value, 10);
  const newLi2 = document.createElement("li");
  newLi2.textContent = playerTotal;
  document.querySelector("#random-result").appendChild(newLi2);
  // debug messages
  console.log(dealerHand);
  console.log(playerHand);

  // SUPPOSE to append player's total under hand
  // const newLi = document.createElement("li");
  // newLi.textContent = "player Total is" + playerTotal; // TODO figure out why it is pushed to the dom as a null element
  // document.querySelector("random-result").appendChild(newLi);
};

const hitMe = () => {
  // Total value of player's hand
  playerTotal = parseInt(playerHand[0].value + playerHand[1].value, 10);
  console.log(playerTotal);
  let playerValue;
  // Pops player's 3rd card
  // hitIndex = document.querySelector(".hit-button").value; // TODO if player presses hit button twice, hit again
  for (let hitIndex = 0; hitIndex < 1; hitIndex++) {
    playerHand.push(deck.pop());
    playerValue = playerTotal + parseInt(playerHand[2].value, 10);
    // debug msg
    console.log(playerValue);
    if (playerValue > 21) {
      console.log("The player busted");
      // Creates element in the Dom named newLi
      const newLi = document.createElement("li");
      // New line writes the player's hand calling the index values each iteration
      newLi.textContent = "Player has busted!";
      // Calls new line back to the DOM
      document.querySelector("#random-result").appendChild(newLi);
    }
  }

  // Creates element in the Dom named newLi
  const newLi = document.createElement("li");
  const newLi2 = document.createElement("li");
  // New line writes the player's hand calling the index values each iteration
  newLi.textContent =
    "The player has " + playerHand[2].rank + " of " + playerHand[2].suit;
  newLi2.textContent = playerValue;
  // Calls new line back to the DOM
  document.querySelector("#random-result").appendChild(newLi);
  document.querySelector("#random-result").appendChild(newLi2);
  playAgain();
};

let exitGame = () => {
  const blackJack = 21;
  dealerTotal = parseInt(dealerHand[0].value + dealerHand[1].value, 10);
  // if dealerHand values are less than 17, push another card
  if (dealerTotal < 17) {
    dealerHand.push(deck.pop());
    let dealerValue = dealerTotal + parseInt(dealerHand[2].value, 10);
    console.log(dealerValue);
    // Creates element in the Dom named newLi
    const newLi = document.createElement("li");
    // Create 2nd line element for total points of dealersHand
    const newLi2 = document.createElement("li");
    const newLi3 = document.createElement("li");
    const newLi4 = document.createElement("li");
    // New line writes the player's hand calling the index values each iteration
    newLi.textContent =
      "The dealer has " + dealerHand[0].rank + " of " + dealerHand[0].suit;
    newLi2.textContent = +dealerHand[1].rank + " of " + dealerHand[1].suit;
    newLi3.textContent =
      "and a " + dealerHand[2].rank + " of " + dealerHand[2].suit;
    newLi4.textContent = dealerValue;
    // Calls new line back to the DOM
    document.querySelector("#random-result").appendChild(newLi);
    document.querySelector("#random-result").appendChild(newLi2);
    document.querySelector("#random-result").appendChild(newLi3);
    document.querySelector("#random-result").appendChild(newLi4);
    // playAgain();
  } else if ((dealerTotal = blackJack)) {
    console.log(dealerTotal);
    // Creates element in the Dom named newLi
    const newLi = document.createElement("li");
    // Create 2nd line element for total points of dealersHand
    const newLi2 = document.createElement("li");
    const newLi3 = document.createElement("li");
    // New line writes the player's hand calling the index values each iteration
    newLi.textContent =
      "The dealer has " + dealerHand[0].rank + " of " + dealerHand[0].suit;
    newLi2.textContent =
      "and a " + dealerHand[1].rank + " of " + dealerHand[1].suit;
    newLi3.textContent = dealerTotal;
    // Calls new line back to the DOM
    document.querySelector("#random-result").appendChild(newLi);
    document.querySelector("#random-result").appendChild(newLi2);
    document.querySelector("#random-result").appendChild(newLi3);
  } else {
    console.log("Dealer bust");
    // Creates element in the Dom named newLi
    const newLi = document.createElement("li");
    // New line writes the player's hand calling the index values each iteration
    newLi.textContent = "The dealer busted! Player wins!";
    // Calls new line back to the DOM
    document.querySelector("#random-result").appendChild(newLi);
  }
  playAgain();
};

// mainline logic
const main = () => {
  createDeck();
  shuffle();
  cardsDealt();
};

// Event listeners
document.querySelector(".start-button").addEventListener("click", main);
document.querySelector(".hit-button").addEventListener("click", hitMe);
document.querySelector(".stand-button").addEventListener("click", exitGame);
