import { returnFirstNumberInString } from '../globalHelpers';
import { Hand } from './Hand';
import { Card, WinningType } from './types';

export function parseDataToHands_part1(data: string[]) {
  const allHands: Hand[] = [];
  for (let handAsString of data) {
    const dividedString = handAsString.split(' ');
    const cards = dividedString[0].split('').map((str: string) => {
      return {
        label: str,
        cardStrength: getStrengthOfCardLabel(str),
      };
    });

    allHands.push(new Hand(cards, returnFirstNumberInString(dividedString[1]), false));
  }
  return allHands;
}

export function parseDataToHands_part2(data: string[]) {
  const allHands: Hand[] = [];
  for (let handAsString of data) {
    const dividedString = handAsString.split(' ');
    const cards = dividedString[0].split('').map((str: string) => {
      return {
        label: str,
        cardStrength: getStrengthOfCardLabelWithJokers(str),
      };
    });

    allHands.push(new Hand(cards, returnFirstNumberInString(dividedString[1]), true));
  }
  return allHands;
}

export function calcWinningTypeOfHand(cards: Card[]): { type: WinningType; strength: number } {
  const uniqueCards = new Set(cards.map((card) => card.label));
  // console.log('This Card is being processed')
  // console.log(cards.map(card => card.label).sort((a,b) => {return a > b ? 1 : -1}).join());
  if (uniqueCards.size === 1) {
    // console.log(WinningType.FIVEOfAKIND)
    return { type: WinningType.FIVEOfAKIND, strength: 7 };
  }

  if (uniqueCards.size === 2) {
    if (
      cards.filter((card) => card.label === Array.from(uniqueCards)[0]).length === 4 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[1]).length === 4
    ) {
      // console.log(WinningType.FOUROFAKIND)
      return { type: WinningType.FOUROFAKIND, strength: 6 };
    }

    if (
      cards.filter((card) => card.label === Array.from(uniqueCards)[0]).length === 3 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[1]).length === 3
    ) {
      // console.log(WinningType.FULLHOUSE)
      return { type: WinningType.FULLHOUSE, strength: 5 };
    }
  }

  if (uniqueCards.size === 3) {
    if (
      cards.filter((card) => card.label === Array.from(uniqueCards)[0]).length === 3 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[1]).length === 3 ||
      cards.filter((card) => card.label === Array.from(uniqueCards)[2]).length === 3
    ) {
      // console.log(WinningType.THREEOFAKIND)
      return { type: WinningType.THREEOFAKIND, strength: 4 };
    }

    // console.log(WinningType.TWOPAIR)
    return { type: WinningType.TWOPAIR, strength: 3 };
  }

  if (uniqueCards.size === 4) {
    // console.log(WinningType.ONEPAIR)
    return { type: WinningType.ONEPAIR, strength: 2 };
  }

  // console.log(WinningType.HIGHCARD)
  return { type: WinningType.HIGHCARD, strength: 1 };
}

export function calcWinningTypeOfHandWithJokers(cards: Card[]): { type: WinningType; strength: number } {
  const amountJokers = cards.filter((card) => card.label === 'J').length;

  if (amountJokers === 0) {
    return calcWinningTypeOfHand(cards);
  }

  if (amountJokers === 5 || amountJokers === 4) {
    return { type: WinningType.FIVEOfAKIND, strength: 7 };
  }

  if (amountJokers === 3) {
    const uniqueCards = new Set(cards.map((card) => card.label));
    if (uniqueCards.size === 2) {
      return { type: WinningType.FIVEOfAKIND, strength: 7 };
    }
    if (uniqueCards.size === 3) {
      return { type: WinningType.FOUROFAKIND, strength: 6 };
    }
  }

  if (amountJokers === 2) {
    const uniqueCardsWOJoker = new Set(cards.map((card) => card.label)).size - 1;
    if (uniqueCardsWOJoker === 1) {
      return { type: WinningType.FIVEOfAKIND, strength: 7 };
    }
    if (uniqueCardsWOJoker === 2) {
      return { type: WinningType.FOUROFAKIND, strength: 6 };
    }
    if (uniqueCardsWOJoker === 3) {
      return { type: WinningType.THREEOFAKIND, strength: 4 };
    }
  }

  if (amountJokers === 1) {
    const uniqueCards = new Set(cards.map((card) => card.label));
    const uniqueCardsWOJoker = uniqueCards.size - 1;
    if (uniqueCardsWOJoker === 1) {
      return { type: WinningType.FIVEOfAKIND, strength: 7 };
    }
    if (uniqueCardsWOJoker === 2) {
      const amountCardOne = cards.filter((card) => card.label === Array.from(uniqueCards)[0]).length;
      const amountCardTwo = cards.filter((card) => card.label === Array.from(uniqueCards)[1]).length;
      if (amountCardOne === 3 || amountCardTwo === 3) {
        return { type: WinningType.FOUROFAKIND, strength: 6 };
      } else {
        return { type: WinningType.FULLHOUSE, strength: 5 };
      }
    }

    if (uniqueCardsWOJoker === 3) {
      return { type: WinningType.THREEOFAKIND, strength: 4 };
    }

    if (uniqueCardsWOJoker === 4) {
      return { type: WinningType.ONEPAIR, strength: 2 };
    }
  }

  throw new Error('Didnt Find a winning-Type');
}

export function letHandsFightEachOther(hands: Hand[]) {
  const handsThatHaventFoughtYet: Hand[] = hands;
  const handsThatHaveFought: Hand[] = [];

  while (handsThatHaventFoughtYet.length > 1) {
    const currentHand: Hand = handsThatHaventFoughtYet.splice(0, 1)[0];
    for (let otherHand of handsThatHaventFoughtYet) {
      const currentHandWins = otherHand.otherHandWinsAgainstMe(currentHand);
      if (currentHandWins) {
        currentHand.wins++;
      } else {
        otherHand.wins++;
      }
    }
    handsThatHaveFought.push(currentHand);
  }
  handsThatHaveFought.push(handsThatHaventFoughtYet.splice(0, 1)[0]);

  handsThatHaveFought.sort((a, b) => {
    return a.wins > b.wins ? 1 : -1;
  });

  return handsThatHaveFought;
}

function getStrengthOfCardLabelWithJokers(label: string): number {
  if (label === 'J') {
    return 0;
  }
  return getStrengthOfCardLabel(label);
}

function getStrengthOfCardLabel(label: string): number {
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
    default: {
      throw new Error(`cant parse ${label} as a card`);
    }
  }
}
