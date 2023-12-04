import { parseNumbersFromString } from '../globalHelpers';
import { Card } from './types';

export function parseData(data: string[]) {
  const cardsToReturn: Card[] = [];
  for (let [index, row] of data.entries()) {
    const onlySeparatedNumbers = row.split(':')[1].split('|');

    cardsToReturn.push({
      id: index,
      winningNumbers: parseNumbersFromString(onlySeparatedNumbers[0]),
      pickedNumbers: parseNumbersFromString(onlySeparatedNumbers[1]),
      value: 0,
      hits: 0
    } as Card);
  }
  return cardsToReturn;
}
