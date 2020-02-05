import "jest";
import { baseDeck, shuffledDecks, DEFAULT_NUM_DECKS } from "../deck";

describe("shuffleDeck", () => {
  it("can shuffle a deck of cards", () => {
    expect(shuffledDecks(1).length).toEqual(baseDeck.length);
  });

  it("can shuffle multiple decks of cards", () => {
    expect(shuffledDecks(2).length).toEqual(baseDeck.length * 2);
  });

  it("defaults to DEFAULT_NUM_DECKS", () => {
    expect(shuffledDecks().length).toEqual(baseDeck.length * DEFAULT_NUM_DECKS);
  });
});
