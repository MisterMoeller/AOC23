import { Card, CardLabels, WinningType } from './types';

export function parseDataToHands(data: string[]) {

}

function getStrengthOfCardLabel(label: CardLabels): number {
  switch (label) {
    case '2': {
      return 1;
    }
    case '3': {
      return 2;
    }
    case '4': {
      return 3;
    }
    case '5': {
      return 4;
    }
    case '6': {
      return 5;
    }
    case '7': {
      return 6;
    }
    case '8': {
      return 7;
    }
    case '9': {
      return 8;
    }
    case 'T': {
      return 9;
    }
    case 'J': {
      return 10;
    }
    case 'Q': {
      return 11;
    }
    case 'K': {
      return 12;
    }
    case 'A': {
      return 13;
    }
  }
}

export function calcWinningTypeOfHand(cards: Card[]): { type: WinningType; strength: number } {
  const uniqueCards = new Set(cards.map((card) => card.label));
  if (uniqueCards.size === 1) {
    return { type: WinningType.FIVEOfAKIND, strength: 7 };
  }

  if (uniqueCards.size === 2) {
    if (
      cards.filter((card) => card.label === Array.from(uniqueCards)[0]).length === 4 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[1]).length === 4
    ) {
      return { type: WinningType.FOUROFAKIND, strength: 6 };
    }

    if (
      cards.filter((card) => card.label === Array.from(uniqueCards)[0]).length === 3 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[1]).length === 3
    ) {
      return { type: WinningType.FULLHOUSE, strength: 5 };
    }
  }

  if (uniqueCards.size === 3) {
    if (
      cards.filter((card) => card.label === Array.from(uniqueCards)[0]).length === 3 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[1]).length === 3 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[2]).length === 3
    ) {
      return { type: WinningType.THREEOFAKIND, strength: 4 };
    }

    return { type: WinningType.TWOPAIR, strength: 3 };
  }

  if (uniqueCards.size === 4) {
    return { type: WinningType.ONEPAIR, strength: 2 };
  }

  return { type: WinningType.FIVEOfAKIND, strength: 1 };
}
