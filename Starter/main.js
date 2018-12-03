// Our possible values for our hands
const posVals = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// A place to store the current hand we're working with
let hand = [];

// This function will create a new hand
function createHand () {
  // Iterate 5 times
  for (let i = 0; i < 5; i++) {
    // This is an array holding references to our objects
    let suits = [Heart, Diamond, Spade, Club];

    // Let's select a random value from our possible values list
    let value = posVals[Math.floor(Math.random() * posVals.length)];

    // Let's select a random object reference from our 
    // suits list and assign it to a variable
    let randSuit = suits[Math.floor(Math.random() * suits.length)];

    // We can create a new object with merely the variable.
    // This is because the variable is holding a reference to
    // the object
    let card = new randSuit(value);

    // We can call our .create() method that is on our parent
    // object, 'Card'
    card.create('#hand');

    // We can then push the card's 'card' reference to our
    // hand list so we can later remove it
    hand.push(card.card);
  }
}

// This function will remove the hand
function removeHand () {
  // Let's iterate and remove each card
  for (let card of hand) {
    card.remove();
  }

  // Then we'll reset the hand so it isn't full
  // of empty references
  hand = [];
}

// Step 1 - Create an object constructor function called Card
// with the parameters 'suit' and 'value'
function Card (suit, value){
  // Step 2 - Add 3 properties: 'suit', 'value', and 'card'
  this.suit = 'suit';
  this.value = 'value';
  // Assign the 2 parameters to the corresponding properties

  // Step 3 - Create a function called 'create'
  function create (selector) {
    // Below is the guts to the 'create' function
    this.card = document.createElement('div');
    this.card.classList.add(this.suit, 'cardStyle');
    this.card.textContent = this.value;
    document.querySelector(selector).append(this.card);
  }
}

// Step 4 - Add a prototype function called 'remove'
function remove () {
  this.card.remove();
}

// Step 5 - Create a new constructor function called 'Heart'
// with the parameter 'value'
function Heart (value){
  // Step 6 - Call the 'Card' constructor to
  // inherit the 'Card' object properties
  Card.call(this, 'heart', value);
}
// Step 7 - Assign the Card prototype to the Heart prototype
// to inherit the prototype methods
Heart.prototype = Object.create(Card.prototype);

// I have completed Diamond, Spade, and Club for you
// Use these to complete steps 5, 6, and 7
const Diamond = function (value) {
  Card.call(this, 'diamond', value);
}
Diamond.prototype = Object.create(Card.prototype);

const Spade = function (value) {
  Card.call(this, 'spade', value);
}
Spade.prototype = Object.create(Card.prototype);

const Club = function (value) {
  Card.call(this, 'club', value);
}
Club.prototype = Object.create(Card.prototype);

// This will remove a hand if it exists
// and create a new hand every 3 secs
setInterval(function () {
  removeHand();
  createHand();
}, 3000);