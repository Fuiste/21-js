import { Card, cardNames, cardSuits } from "./card";
import { shuffle } from "./util";

/**
 * A Deck of cards, sans jokers, unshuffled
 */
export const baseDeck: Card[] = cardNames.reduce(
  (deck, name) => [...deck, ...cardSuits.map(suit => ({ name, suit }))],
  [] as Card[]
);

/**
 * Returns a shuffled deck of cards
 */
export const shuffledDeck = () => shuffle(baseDeck);
