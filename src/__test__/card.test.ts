import "jest";
import { cardValue, Card } from "../card";

const baseCard: Card = { name: "2", suit: "Clubs" };

describe("cardValue", () => {
  it("calculates a value", () => {
    expect(cardValue(baseCard)).toBeDefined();
  });

  it("calculates the correct value for integer named cards", () => {
    expect(cardValue({ ...baseCard, name: "4" })).toEqual(4);
  });

  it("calculates the correct value for character named cards", () => {
    expect(cardValue({ ...baseCard, name: "K" })).toEqual(10);
  });

  it("calculates the correct value for aces", () => {
    expect(cardValue({ ...baseCard, name: "A" })).toEqual(11);
  });
});
