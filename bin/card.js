"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Array of all valid card names
 */
exports.cardNames = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
];
/**
 * Array of all valid card suits
 */
exports.cardSuits = [
    "Clubs",
    "Diamonds",
    "Hearts",
    "Spades",
];
/**
 * Returns the number value of a card
 *
 * @param card the card to check
 */
exports.cardValue = function (card) {
    if (card.name === "A")
        return 11;
    var rawValue = parseInt(card.name);
    return isNaN(rawValue) ? 10 : rawValue;
};
//# sourceMappingURL=card.js.map