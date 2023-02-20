const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const deck = [];

for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        const card = {
            value: values[j],
            suit: suits[i]
        };
        deck.push(card);
    }
}

// Clone the deck
const deck2 = [...deck];

// Shuffle the second deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
shuffleDeck(deck2);

// Perform the magic trick on the original deck
for (let i = 0; i < deck.length; i++) {
    if (deck[i].value === 'Ace') {
        deck[i].value = 'Queen';
    }
}

// Utility function to print the contents of a deck
function printDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        console.log(`${deck[i].value} of ${deck[i].suit}`);
    }
}

// Utility function to count the number of cards per value
function printCardCounts(deck) {
    const cardCounts = {};

    for (let i = 0; i < deck.length; i++) {
        const cardValue = deck[i].value;
        if (cardCounts[cardValue]) {
            cardCounts[cardValue]++;
        } else {
            cardCounts[cardValue] = 1;
        }
    }

    for (let j = 0; j < values.length; j++) {
        console.log(`${values[j]}: ${cardCounts[values[j]] || 0}`);
    }
}

// Print the decks to check the results
console.log('Original deck:');
printDeck(deck);
console.log('-------------------------------------');
console.log('Shuffled deck:');
printDeck(deck2);
console.log('-------------------------------------');
printCardCounts(deck);