import { calcWinningTypeOfHand, calcWinningTypeOfHandWithJokers } from './helperFunctions';
import { Card, WinningType } from './types';

export class Hand {
  cards: Card[];
  type: { type: WinningType; strength: number };
  bid: number;
  wins: number;

  constructor(cards: Card[], bid: number, withJoker: boolean) {
    this.cards = cards;
    if (withJoker) {
      this.type = calcWinningTypeOfHandWithJokers(cards);
    } else {
      this.type = calcWinningTypeOfHand(cards);
    }
    (this.bid = bid), (this.wins = 0);
  }

  public otherHandWinsAgainstMe(otherHand: Hand): boolean {
    if (this.type.type !== otherHand.type.type) {
      // they are not the same
      return otherHand.type.strength > this.type.strength;
    }

    for (let i = 0; i < 5; i++) {
      if (otherHand.cards[i].cardStrength === this.cards[i].cardStrength) {
        continue;
      }
      return otherHand.cards[i].cardStrength > this.cards[i].cardStrength;
    }

    console.error('Didnt find a winner', this, otherHand);
    throw new Error('Didnt find a winner');
  }
}
