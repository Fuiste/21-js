import { Card } from "./card";
/**
 * A Deck of cards, sans jokers, unshuffled
 */
export declare const baseDeck: Card[];
/**
 * Returns a shuffled stack of cards of numDecks decks
 *
 * @param numDecks the number of decks to use
 */
export declare const shuffledDecks: (numDecks?: number) => Card[];
/**
 * Return true iff a deck has at least one card
 *
 * @param deck the active deck
 */
export declare const hasCards: (deck: Card[]) => boolean;
/**
 * Draw a card from the active deck, returning the card and the remaining deck
 *
 * @param deck the active deck
 */
export declare const draw: (deck: Card[]) => {
    card: Card;
    remaining: Card[];
};
