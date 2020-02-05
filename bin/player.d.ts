import { Card } from "./card";
/**
 * Base player type
 */
export declare type Player = {
    bank: number;
};
/**
 * A hand in a game
 */
export declare type Hand = {
    bet: number;
    cards: Card[];
};
/**
 * The dealer's cards (kinda a special case of Hand)
 */
export declare type Dealer = {
    cards: Card[];
};
/**
 * Returns the number value of a hand
 *
 * @param hand the hand to check
 */
export declare const handValue: (hand: Hand) => number;
/**
 * Returns true iff a hand busted
 *
 * @param hand the hand to check
 */
export declare const didBust: (hand: Hand) => boolean;
