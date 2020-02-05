import "jest";
import { Card, cardValue } from "../card";
import { hasAce, handValue, didBust, didBlackjack } from "../hand";

// Test cards
const ace: Card = { name: "A", suit: "Hearts" };
const five: Card = { name: "5", suit: "Diamonds" };
const ten: Card = { name: "10", suit: "Clubs" };
const king: Card = { name: "K", suit: "Spades" };

// Test hands
const softSixteen = { bet: 100, cards: [ace, five] };
const blackjack = { bet: 200, cards: [ace, ten] };
const twenty = { bet: 300, cards: [ten, king] };
const bust = { bet: 400, cards: [ten, king, five] };
const aceBust = { bet: 500, cards: [ace, ten, king, five] };
const aceLow = { bet: 600, cards: [ace, ten, five] };
const aceTwentyOne = { bet: 700, cards: [ace, ten, king] };

describe("hasAce", () => {
  it("returns true if the hand has an ace", () => {
    expect(hasAce(softSixteen)).toEqual(true);
  });

  it("returns false if the hand has no ace", () => {
    expect(hasAce(twenty)).toEqual(false);
  });
});

describe("handValue", () => {
  it("can calculate hand values with no aces", () => {
    expect(handValue(bust)).toEqual(25);
  });

  it("can calculate hand values with ace high", () => {
    expect(handValue(softSixteen)).toEqual(16);
  });

  it("can calculate hand values with ace low", () => {
    expect(handValue(aceLow)).toEqual(16);
  });
});

describe("didBust", () => {
  it("returns true if the hand busted (no ace)", () => {
    expect(didBust(bust)).toEqual(true);
  });

  it("returns true if the hand busted (one ace)", () => {
    expect(didBust(aceBust)).toEqual(true);
  });

  it("returns false if the hand did not bust", () => {
    expect(didBust(blackjack)).toEqual(false);
  });
});

describe("blackjack", () => {
  it("returns true if a hand is a blackjack", () => {
    expect(didBlackjack(blackjack)).toEqual(true);
  });

  it("returns false if a hand is not a blackjack", () => {
    expect(didBlackjack(bust)).toEqual(false);
  });

  it("returns false if a hand has value 21 but is not a blackjack", () => {
    expect(didBlackjack(aceTwentyOne)).toEqual(false);
  });
});
