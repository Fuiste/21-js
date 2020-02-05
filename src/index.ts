import { shuffledDecks, baseDeck } from "./deck";
import { Hand, didBust } from "./player";

const foo: Hand = {
  bet: 100,
  cards: [
    { name: "10", suit: "Clubs" },
    { name: "A", suit: "Diamonds" },
  ],
};
const bar: Hand = {
  bet: 100,
  cards: [
    { name: "2", suit: "Clubs" },
    { name: "5", suit: "Diamonds" },
  ],
};
const baz: Hand = {
  bet: 100,
  cards: [
    { name: "10", suit: "Clubs" },
    { name: "10", suit: "Diamonds" },
    { name: "5", suit: "Diamonds" },
  ],
};
