import { calcWinningTypeOfHand } from './helperFunctions';

export type CardLabels = 'A' | 'K' | 'Q' | 'J' | 'T' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';

export type Card = {
  label: CardLabels;
  cardStrength: number;
};

export enum WinningType {
  FIVEOfAKIND,
  FOUROFAKIND,
  THREEOFAKIND,
  FULLHOUSE,
  TWOPAIR,
  ONEPAIR,
  HIGHCARD,
}

export class Hand {
  cards: Card[];
  type: {type: WinningType, strength: number};

  constructor(cards: Card[]) {
    this.cards = cards;
    this.type = calcWinningTypeOfHand(cards);
  }
}
