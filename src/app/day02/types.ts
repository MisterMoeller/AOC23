export type Draw = {
  color: Color;
  amount: number;
};

export type Color = 'r' | 'g' | 'b';

export type Game = {
  id: number;
  draws: Draw[];
};
