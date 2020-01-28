export type Card = {
  name:
    | "1"
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

export const cardNames: Card["name"][] = [
  "1",
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

export const cardSuits: Card["suit"][] = [
  "Clubs",
  "Diamonds",
  "Hearts",
  "Spades",
];
