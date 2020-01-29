"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./card");
var util_1 = require("./util");
/**
 * A Deck of cards, sans jokers, unshuffled
 */
exports.baseDeck = card_1.cardNames.reduce(function (deck, name) { return __spreadArrays(deck, card_1.cardSuits.map(function (suit) { return ({ name: name, suit: suit }); })); }, []);
/**
 * Returns a shuffled deck of cards
 */
exports.shuffledDeck = function () { return util_1.shuffle(exports.baseDeck); };
exports.hasCards = function (deck) { return deck.length > 0; };
exports.draw = function (deck) { return ({
    card: deck[0],
    remaining: deck.slice(1),
}); };
//# sourceMappingURL=deck.js.map