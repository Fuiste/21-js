/**
 * Main card type
 */
export type Card = {
  name:
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "J"
    | "Q"
    | "K"
    | "A";
  suit: "Hearts" | "Diamonds" | "Spades" | "Clubs";
};

/**
 * Array of all valid card names
 */
export const cardNames: Card["name"][] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

/**
 * Array of all valid card suits
 */
export const cardSuits: Card["suit"][] = [
  "Clubs",
  "Diamonds",
  "Hearts",
  "Spades",
];

/**
 * Returns the number value of a card
 *
 * @param card the card to check
 */
export const cardValue = (card: Card) => {
  if (card.name === "A") return 11;
  const rawValue = parseInt(card.name);
  return isNaN(rawValue) ? 10 : rawValue;
};
