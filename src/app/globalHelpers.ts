export function returnFirstNumberInString(str: string): number {
  const stringAsDigit = /\d+/.exec(str)?.[0];
  if (!stringAsDigit) {
    throw new Error(`didn't find number in ${stringAsDigit}`);
  }

  return Number.parseInt(stringAsDigit);
}

export function parseNumbersFromString(str: string): number[] {
  let match;
  const allMatches: number[] = [];

  const regexAllNumbers = /\d+/g;
  while ((match = regexAllNumbers.exec(str)) !== null) {
    allMatches.push(Number.parseInt(match[0]));
  }

  return allMatches;
}
