import { returnFirstNumberInString } from '../globalHelpers';
import { Game, Draw, Color } from './types';

export function parseDataToGame_day02(data: string[]): Game[] {
  const games = [];
  for (let game of data) {
    const idAndDraws = game.split(':');
    const gameToBeAdded: Game = {
      id: returnFirstNumberInString(idAndDraws[0]),
      draws: [],
    };
    const allDrawsAsString = idAndDraws[1].split(';');
    for (let singleDrawAsString of allDrawsAsString) {
      const partsOfDrawAsString = singleDrawAsString.split(',');
      for (let singlePartOfDrawAsString of partsOfDrawAsString) {
        gameToBeAdded.draws.push({
          amount: returnFirstNumberInString(singlePartOfDrawAsString),
          color: stringToColor(singlePartOfDrawAsString.trim().split(' ')[1]),
        } as Draw);
      }
    }
    games.push(gameToBeAdded);
  }
  return games;
}

export function getHighestAmountOfColor(game: Game, color: Color) {
  return Math.max(...game.draws.filter((draw) => draw.color === color).map((draw) => draw.amount));
}

function stringToColor(str: string): 'r' | 'g' | 'b' {
  switch (str) {
    case 'red': {
      return 'r';
    }
    case 'blue': {
      return 'b';
    }
    case 'green': {
      return 'g';
    }
    default: {
      throw new Error(`cant parse color ${str}`);
    }
  }
}
