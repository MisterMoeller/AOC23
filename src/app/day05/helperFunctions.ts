import { parseNumbersFromString } from '../globalHelpers';

export function parseData(data: string): { seeds: number[]; categories: AlmanacCategory[] } {
  // const cardsToReturn: Card[] = [];
  const toReturn: { seeds: number[]; categories: AlmanacCategory[] } = {
    seeds: [],
    categories: [],
  };

  const dataSplitInBlocks = data.split(/\n\s*\n/);
  const seeds = dataSplitInBlocks[0]
    .split(':')[1]
    .trim()
    .split(' ')
    .map((str) => parseNumbersFromString(str))
    .reduce((acc, curr) => acc.concat(curr), []);

  const seedToSoilData = dataSplitInBlocks[1];
  const seedToSoilEntries = seedToSoilData
    .split(':')[1]
    .trim()
    .split('\r\n')
    .map((str) => parseNumbersFromString(str));

  toReturn.categories.push({
    source: Attributes.SEED,
    destination: Attributes.SOIL,
    entries: seedToSoilEntries.map((numbers: number[]) => {
      return mapToEntry(numbers);
    }),
  } as AlmanacCategory);

  console.log(seedToSoilData);
  console.log(seedToSoilEntries);

  return toReturn;
}

function mapToEntry(numbers: number[]) {
  return {
    sourceRangeStart: numbers[0],
    destinationRangeStart: numbers[1],
    rangeLength: numbers[3],
  } as AlmanacEntry;
}

export enum Attributes {
  SEED,
  SOIL,
  FERTILIZER,
  WATER,
  LIGHT,
  TEMPERATURE,
  HUMIDITY,
  LOCATION,
}

export type parsedData = {
  seeds: number[];
};

export type AlmanacCategory = {
  source: Attributes;
  destination: Attributes;
  entries: AlmanacEntry[];
};

export type AlmanacEntry = {
  sourceRangeStart: number;
  destinationRangeStart: number;
  rangeLength: number;
};
