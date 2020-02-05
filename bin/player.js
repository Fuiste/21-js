"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./card");
/**
 * Does a hand have an ace?
 *
 * @param hand the hand to check
 */
var hasAce = function (hand) {
    return hand.cards.filter(function (c) { return c.name === "A"; }).length > 0;
};
/**
 * Returns the number value of a hand
 *
 * @param hand the hand to check
 */
exports.handValue = function (hand) {
    var rawValue = hand.cards.reduce(function (total, cur) { return total + card_1.cardValue(cur); }, 0);
    return hasAce(hand) && rawValue > 21 ? rawValue - 10 : rawValue;
};
/**
 * Returns true iff a hand busted
 *
 * @param hand the hand to check
 */
exports.didBust = function (hand) { return exports.handValue(hand) > 21; };
//# sourceMappingURL=player.js.map