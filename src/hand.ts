import { Card, cardValue } from "./card";

/**
 * A hand in a game
 */
export type Hand = {
  bet?: number;
  cards: Card[];
};

/**
 * Does a hand have an ace?
 *
 * @param hand the hand to check
 */
export const hasAce = (hand: Hand) =>
  hand.cards.filter(c => c.name === "A").length > 0;

/**
 * Returns the number value of a hand
 *
 * @param hand the hand to check
 */
export const handValue = (hand: Hand) => {
  const rawValue = hand.cards.reduce((total, cur) => total + cardValue(cur), 0);
  return hasAce(hand) && rawValue > 21 ? rawValue - 10 : rawValue;
};

/**
 * Returns true iff a hand busted
 *
 * @param hand the hand to check
 */
export const didBust = (hand: Hand) => handValue(hand) > 21;

/**
 * Returns true iff a hand is a blackjack
 *
 * @param hand the hand to check
 */
export const didBlackjack = (hand: Hand) =>
  handValue(hand) === 21 && hand.cards.length === 2;
