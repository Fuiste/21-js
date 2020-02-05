import { Card, cardNames, cardSuits } from "./card";
import { shuffle } from "./util";

export const DEFAULT_NUM_DECKS = 4;

/**
 * A Deck of cards, sans jokers, unshuffled
 */
export const baseDeck: Card[] = cardNames.reduce(
  (deck, name) => [...deck, ...cardSuits.map(suit => ({ name, suit }))],
  [] as Card[]
);

/**
 * Returns a shuffled stack of cards of numDecks decks
 *
 * @param numDecks the number of decks to use
 */
export const shuffledDecks = (numDecks: number = DEFAULT_NUM_DECKS): Card[] => {
  let rawCards: Card[] = [];
  for (let i = 0; i < numDecks; i++) {
    rawCards = rawCards.concat(baseDeck);
  }

  return shuffle(rawCards);
};

/**
 * Return true iff a deck has at least one card
 *
 * @param deck the active deck
 */
export const hasCards = (deck: Card[]): boolean => deck.length > 0;

/**
 * Draw a card from the active deck, returning the card and the remaining deck
 *
 * @param deck the active deck
 */
export const draw = (deck: Card[]): { card: Card; remaining: Card[] } => ({
  card: deck[0],
  remaining: deck.slice(1),
});
