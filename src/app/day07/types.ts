export type Card = {
  label: string;
  cardStrength: number;
};

export enum WinningType {
  FIVEOfAKIND = 'FIVEOfAKIND',
  FOUROFAKIND = 'FOUROFAKIND',
  THREEOFAKIND = 'THREEOFAKIND',
  FULLHOUSE = 'FULLHOUSE',
  TWOPAIR = 'TWOPAIR',
  ONEPAIR = 'ONEPAIR',
  HIGHCARD = 'HIGHCARD',
}
