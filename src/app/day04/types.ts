export type Card = {
  id: number;
  winningNumbers: number[];
  pickedNumbers: number[];
  value: number;
  hits: number;
};

export type ReducedCard = {
  amount: number;
  hits: number;
};
