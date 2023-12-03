import { SymbolDay03, EnginePart } from "./types";

export function parseSymbolsByRegex(data: string[], regex: RegExp): SymbolDay03[] {
  const allSymbols: SymbolDay03[] = [];
  for (let [index, row] of data.entries()) {
    let match;
    while ((match = regex.exec(row)) !== null) {
      allSymbols.push({
        value: match[0],
        x: match.index,
        y: index,
      });
    }
  }

  return allSymbols;
}

export function parseEngineParts(data: string[]): EnginePart[] {
  const allParts: EnginePart[] = [];
  for (let [index, row] of data.entries()) {
    let match;
    const regexFindMultiDigitNumbers = /\d+/g;
    while ((match = regexFindMultiDigitNumbers.exec(row)) !== null) {
      allParts.push({
        number: Number.parseInt(match[0]),
        xFirstDigit: match.index,
        xLastDigit: match.index + match[0].length - 1,
        y: index,
      });
    }
  }
  return allParts;
}

export function groupSymbolsByY(symbols: SymbolDay03[]) {
  const symbolsByY = new Map<number, SymbolDay03[]>();
  symbols.forEach((symbol) => {
    if (!symbolsByY.has(symbol.y)) {
      symbolsByY.set(symbol.y, []);
    }
    symbolsByY.get(symbol.y)!.push(symbol);
  });
  return symbolsByY;
}

export function groupPartyByY(symbols: EnginePart[]) {
  const enginePartsByY = new Map<number, EnginePart[]>();
  symbols.forEach((enginePart) => {
    if (!enginePartsByY.has(enginePart.y)) {
      enginePartsByY.set(enginePart.y, []);
    }
    enginePartsByY.get(enginePart.y)!.push(enginePart);
  });
  return enginePartsByY;
}

export function filterOutPartsWithNoAdjacentSymbols(symbolsByY: Map<number, SymbolDay03[]>, allParts: EnginePart[]) {
  const legitParts = allParts.filter((part) => {
    const symbolsLineAbove = symbolsByY.get(part.y - 1);
    const symbolsSameLine = symbolsByY.get(part.y);
    const symbolsLineBelow = symbolsByY.get(part.y + 1);

    if (symbolsLineAbove) {
      for (let symbol of symbolsLineAbove) {
        if (isNeighborButNotSameLine(symbol, part)) {
          return true;
        }
      }
    }

    if (symbolsSameLine) {
      for (let symbol of symbolsSameLine) {
        if (isNeighborSameLine(symbol, part)) {
          return true;
        }
      }
    }

    if (symbolsLineBelow) {
      for (let symbol of symbolsLineBelow) {
        if (isNeighborButNotSameLine(symbol, part)) {
          return true;
        }
      }
    }

    return false;
  });
  return legitParts;
}

export function filterOutSymbolsWithNoTwoEnginesAdjacent(
  enginePartsByY: Map<number, EnginePart[]>,
  allSymbols: SymbolDay03[]
) {
  const legitSymbols: {
    symbol: SymbolDay03;
    parts: EnginePart[];
  }[] = [];

  for (let symbol of allSymbols) {
    const adjacentEngineParts: EnginePart[] = [];
    const enginesLineAbove = enginePartsByY.get(symbol.y - 1);
    const enginePartsSameLine = enginePartsByY.get(symbol.y);
    const enginePartsLineBelow = enginePartsByY.get(symbol.y + 1);

    if (enginesLineAbove) {
      for (let enginePart of enginesLineAbove) {
        if (isNeighborButNotSameLine(symbol, enginePart)) {
          adjacentEngineParts.push(enginePart);
        }
      }
    }

    if (enginePartsSameLine) {
      for (let enginePart of enginePartsSameLine) {
        if (isNeighborSameLine(symbol, enginePart)) {
          adjacentEngineParts.push(enginePart);
        }
      }
    }

    if (enginePartsLineBelow) {
      for (let enginePart of enginePartsLineBelow) {
        if (isNeighborButNotSameLine(symbol, enginePart)) {
          adjacentEngineParts.push(enginePart);
        }
      }
    }

    if (adjacentEngineParts.length >= 2) {
      legitSymbols.push({
        symbol: symbol,
        parts: adjacentEngineParts,
      });
    }
  }
  return legitSymbols;
}

function isNeighborButNotSameLine(symbol: SymbolDay03, enginePart: EnginePart) {
  return symbol.x >= enginePart.xFirstDigit - 1 && symbol.x <= enginePart.xLastDigit + 1;
}

function isNeighborSameLine(symbol: SymbolDay03, enginePart: EnginePart) {
  return symbol.x === enginePart.xFirstDigit - 1 || symbol.x === enginePart.xLastDigit + 1;
}
