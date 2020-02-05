/**
 * Main card type
 */
export declare type Card = {
    name: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
    suit: "Hearts" | "Diamonds" | "Spades" | "Clubs";
};
/**
 * Array of all valid card names
 */
export declare const cardNames: Card["name"][];
/**
 * Array of all valid card suits
 */
export declare const cardSuits: Card["suit"][];
/**
 * Returns the number value of a card
 *
 * @param card the card to check
 */
export declare const cardValue: (card: Card) => number;
