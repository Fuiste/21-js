import { Card } from "./card";
/**
 * A Deck of cards, sans jokers, unshuffled
 */
export declare const baseDeck: Card[];
/**
 * Returns a shuffled deck of cards
 */
export declare const shuffledDeck: () => Card[];
export declare const hasCards: (deck: Card[]) => boolean;
export declare const draw: (deck: Card[]) => {
    card: Card;
    remaining: Card[];
};
