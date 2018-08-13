"use strict";

// class Players {
//   constructor(name) {
//     this.name = playerName;
//     name: getPlayer,
//     suit: getSuit,
//     rank: getRank
//   }
// }
// Parallel array

// Game arrays
const deck = [];
const playerHand = [];
const dealerHand = [];
let dealerTotal;

// const init = () => {
//   deck.splice(0, deck.length);
//   playerHand.splice(0, playerHand.length);
//   dealerHand.splice(0, dealerHand.length);
//   playerTotal = 0;
//   dealerTotal = 0;
// };

const playAgain = () => {
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again?";
  playAgainButton.addEventListener("click", function() {
    window.location.reload();
  });
  document.querySelector("#random-result").appendChild(playAgainButton);
};
// TODO fix play again button
//   playAgainButton.textContent = "Play Again?";
//   document.querySelector("#random-result").appendChild(playAgainButton);
//   // window.location.reload();
// };
// Creates array of deck
const createDeck = () => {
  const suits = ["clubs", "diamonds", "hearts", "spades"];
  const ranks = [
    { display: "Ace", value: 11 },
    { display: "2", value: 2 },
    { display: "3", value: 3 },
    { display: "4", value: 4 },
    { display: "5", value: 5 },
    { display: "6", value: 6 },
    { display: "7", value: 7 },
    { display: "8", value: 8 },
    { display: "9", value: 9 },
    { display: "10", value: 10 },
    { display: "Jack", value: 10 },
    { display: "Queen", value: 10 },
    { display: "King", value: 10 }
  ];
  // For each suit in suits(array), making a new rank and a new index
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({
        // Object created w suit value = suit, rank = rank.display, & rank = rank.value
        suit: suit,
        rank: rank.display,
        value: rank.value
      });
    });
  });
  // Call list of cards
  console.log(deck);
  // Call length of array to confirm 52 cards
  console.log(deck.length);
};
// Fisher-Yates Shuffle
// TODO: broken
const shuffle = () => {
  deck.forEach(card => {
    // let card = deck[cardIndex];
    const nextCard = Math.floor(Math.random() * card);
    const bucket = deck[card];
    deck[card] = deck[nextCard];
    deck[nextCard] = bucket;
  });
  console.log(deck);
};
// OLD SHUFFLE
// let shuffle = () => {
//   // For loop will loop 52x
//   for (let i = 0; i < deck.length; i++) {
//     const j = Math.floor(Math.random() * i);
//     // temporary bucket for array deck
//     const temp = deck[i];
//     // value which dumped into temporary is overwritten
//     deck[i] = deck[j];
//     // temporary bucket overwrites the previous array that overwrote
//     deck[j] = temp;
//   }
//   console.log(deck);
// };

// array.forEach(element => {});

// First 2 cards for both players
const cardsDealt = () => {
  // Loop for player's hand
  for (let playerIndex = 0; playerIndex < 2; playerIndex++) {
    // Loop for dealer's hand
    playerHand.push(deck.pop());
  }
  for (let dealerIndex = 0; dealerIndex < 2; dealerIndex++) {
    // pop, then push to the dealer's hand
    dealerHand.push(deck.pop());
  }
  // debug messages
  console.log(playerHand);
  console.log(dealerHand);
  playerHand.map(handToLi).forEach(addCardToList);
  //   playerHand.map(playerTotalToLi);
  //   addCardToList(playerTotalToLi);
};

const handToLi = card => {
  const rv = document.createElement("li");
  //   const rt = document.createElement("li");
  rv.textContent = card.rank + " of " + card.suit;
  //   rt.textContent = parseInt(card.value + card.value, 10);
  return rv;
};

// const playerTotalToLi = card => {
//   const rt = document.createElement("li");
//   //   const rt = document.createElement("li");
//   rt.textContent = parseInt(card.value + card.value, 10);
//   document.querySelector("#random-result").appendChild(rt);
//   return rt;
// };

const addCardToList = li => {
  document.querySelector("#random-result").appendChild(li);
};

const hitMe = () => {
  // Total value of player's hand
  const playerTotal = parseInt(playerHand[0].value + playerHand[1].value, 10);
  console.log(playerTotal);
  let playerValue;
  // Pops player's 3rd card
  // hitIndex = document.querySelector(".hit-button").value; // TODO if player presses hit button twice, hit again
  for (let hitIndex = 0; hitIndex < 1; hitIndex++) {
    playerHand.push(deck.pop());
    playerValue = playerTotal + parseInt(playerHand[2].value, 10);
    // debug msg
    console.log(playerValue);
    const _playerTotal = document.createElement("li");
    document.querySelector("#random-result").appendChild(_playerTotal);
    if (playerValue > 21) {
      playerHand.map(handToLi).forEach(addCardToList);
      console.log("The player busted");
      // Creates element in the Dom named newLi
      const _newLi = document.createElement("li");
      // New line writes the player's hand calling the index values each iteration
      _newLi.textContent = "Player has busted!";
      // Calls new line back to the DOM
      document.querySelector("#random-result").appendChild(_newLi);
      playAgain();
    }
  }
  // Creates element in the Dom named newLi
  const newLi = document.createElement("li");
  newLi.textContent = "";
  document.querySelector("#random-result").appendChild(newLi);
  const newLi2 = document.createElement("li");
  newLi2.textContent = playerValue;
  document.querySelector("#random-result").appendChild(newLi2);
};

let exitGame = () => {
  const blackJack = 21;
  dealerTotal = parseInt(dealerHand[0].value + dealerHand[1].value, 10);
  // if dealerHand values are less than 17, push another card
  if (dealerTotal < 17) {
    dealerHand.push(deck.pop());
    dealerHand.map(handToLi).forEach(addCardToList);
    let dealerValue = dealerTotal + parseInt(dealerHand[2].value, 10);
    console.log(dealerValue);
    const _dealerTotal = document.createElement("li");
    _dealerTotal.textContent = dealerValue;
    document.querySelector("#random-result").appendChild("_dealerTotal");
    // playAgain();
  } else if ((dealerTotal = blackJack)) {
    console.log(dealerTotal);
    // Creates element in the Dom named newLi
    dealerHand.map(handToLi).forEach(addCardToList);
    const newLi3 = document.createElement("li");
    newLi3.textContent = dealerTotal;
    document.querySelector("#random-result").appendChild(newLi3);
  } else {
    console.log("Dealer bust");
    // Creates element in the Dom named newLi
    const _playerWins = document.createElement("li");
    // New line writes the player's hand calling the index values each iteration
    _playerWins.textContent = "The dealer busted! Player wins!";
    // Calls new line back to the DOM
    document.querySelector("#random-result").appendChild(_playerWins);
    playAgain();
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
// init();
document.querySelector(".start-button").addEventListener("click", main);
document.querySelector(".hit-button").addEventListener("click", hitMe);
document.querySelector(".stand-button").addEventListener("click", exitGame);
