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

export const hasCards = (deck: Card[]): boolean => deck.length > 0;

export const draw = (deck: Card[]): { card: Card; remaining: Card[] } => ({
  card: deck[0],
  remaining: deck.slice(1),
});
