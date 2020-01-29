import { Card } from "./card";

export type Player = {
  bank: number;
};

export type Hand = {
  bet: number;
  cards: Card[];
};

export type Dealer = { cards: Card[] };
