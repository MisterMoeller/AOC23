import { parseNumbersFromString } from '../globalHelpers';

export function parseData(data: string): { seeds: number[]; categories: AlmanacCategory[] } {
  // const cardsToReturn: Card[] = [];
  const dataSplitInBlocks = data.split(/\n\s*\n/);

  const seeds = dataSplitInBlocks[0]
    .split(':')[1]
    .trim()
    .split(' ')
    .map((str) => parseNumbersFromString(str))
    .reduce((acc, curr) => acc.concat(curr), []);

  const toReturn: { seeds: number[]; categories: AlmanacCategory[] } = {
    seeds: seeds,
    categories: [],
  };

  toReturn.categories.push(createCategoryFromData(dataSplitInBlocks[1], Attributes.SEED, Attributes.SOIL));
  toReturn.categories.push(createCategoryFromData(dataSplitInBlocks[2], Attributes.SOIL, Attributes.FERTILIZER));
  toReturn.categories.push(createCategoryFromData(dataSplitInBlocks[3], Attributes.FERTILIZER, Attributes.WATER));
  toReturn.categories.push(createCategoryFromData(dataSplitInBlocks[4], Attributes.WATER, Attributes.LIGHT));
  toReturn.categories.push(createCategoryFromData(dataSplitInBlocks[5], Attributes.LIGHT, Attributes.TEMPERATURE));
  toReturn.categories.push(createCategoryFromData(dataSplitInBlocks[6], Attributes.TEMPERATURE, Attributes.HUMIDITY));
  toReturn.categories.push(createCategoryFromData(dataSplitInBlocks[7], Attributes.HUMIDITY, Attributes.LOCATION));

  return toReturn;
}

export function calcValueOfLevel_Part1(source: number[], entries: Ranges[]): number[] {
  const toReturn: number[] = [];
  for (let sourceValue of source) {
    // get value from level1
    let levelValue = 0;
    let foundMapping = false;
    for (let entry of entries) {
      // is it part of the entry?
      if (sourceValue >= entry.sourceRangeStart && sourceValue <= entry.sourceRangeStart + entry.rangeLength) {
        // found it
        const howFarIsSourceValueFromSourceStart = sourceValue - entry.sourceRangeStart;
        levelValue = entry.destinationRangeStart + howFarIsSourceValueFromSourceStart;
        foundMapping = true;
        break;
      }
    }
    if (!foundMapping) {
      levelValue = sourceValue;
    }
    toReturn.push(levelValue);
  }

  return toReturn;
}

function createCategoryFromData(str: string, sourceType: Attributes, destinantionType: Attributes): AlmanacCategory {
  const entries = str
    .split(':')[1]
    .trim()
    .split('\r\n')
    .map((str) => parseNumbersFromString(str));

  return {
    source: sourceType,
    destination: destinantionType,
    entries: entries.map((numbers: number[]) => {
      return mapToEntry(numbers);
    }),
  } as AlmanacCategory;
}

function mapToEntry(numbers: number[]) {
  return {
    destinationRangeStart: numbers[0],
    sourceRangeStart: numbers[1],
    rangeLength: numbers[2],
  } as Ranges;
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
  entries: Ranges[];
};

export type Ranges = {
  sourceRangeStart: number;
  destinationRangeStart: number;
  rangeLength: number;
};

export type SimpleRange = {
  start: number,
  end: number
}

export type myType = {
  rangeFromLastLevel: SimpleRange,
  mappedToDestinationRange: SimpleRange

}