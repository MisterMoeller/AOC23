import { Component } from '@angular/core';
import { DataService } from '../data-service.service';
import {
  parseSymbolsByRegex,
  parseEngineParts,
  groupSymbolsByY,
  groupPartyByY,
  filterOutPartsWithNoAdjacentSymbols,
  filterOutSymbolsWithNoTwoEnginesAdjacent,
} from './helperFunctions';
import { EnginePart, SymbolDay03 } from './types';



@Component({
  selector: 'app-day03',
  templateUrl: './day03.component.html',
  styleUrls: ['./day03.component.scss'],
})
export class Day03Component {
  testData1: string[] = [];
  testData2: string[] = [];
  realData: string[] = [];

  resultTest1 = 0;
  resultTest2 = 0;
  resultSolved1 = 0;
  resultSolved2 = 0;

  solvePuzzlePart_1(data: string[]): number {
    const allParts: EnginePart[] = parseEngineParts(data);
    const regexNotLetterNotNumberNotPoint = /[^\w.]/g;
    const allSymbols: SymbolDay03[] = parseSymbolsByRegex(data, regexNotLetterNotNumberNotPoint);

    const symbolsByY: Map<number, SymbolDay03[]> = groupSymbolsByY(allSymbols);
    const legitParts = filterOutPartsWithNoAdjacentSymbols(symbolsByY, allParts);

    return legitParts.map((part) => part.number).reduce((prev, cur) => prev + cur);
  }

  solvePuzzlePart_2(data: string[]): number {
    const allParts: EnginePart[] = parseEngineParts(data);
    const regexStar = /[*]/g;
    const allSymbols: SymbolDay03[] = parseSymbolsByRegex(data, regexStar);

    const enginePartsByY: Map<number, EnginePart[]> = groupPartyByY(allParts);

    const symbolsWithNeighbourParts: {
      symbol: SymbolDay03;
      parts: EnginePart[];
    }[] = filterOutSymbolsWithNoTwoEnginesAdjacent(enginePartsByY, allSymbols);

    return symbolsWithNeighbourParts
      .map((symbolWithNeighbourParts) =>
        symbolWithNeighbourParts.parts.map((part) => part.number).reduce((prev, cur) => prev * cur, 1)
      )
      .reduce((prev, cur) => prev + cur);
  }

  testPart1() {
    this.resultTest1 = this.solvePuzzlePart_1(this.testData1);
  }

  solvePart1() {
    this.resultSolved1 = this.solvePuzzlePart_1(this.realData);
  }

  testPart2() {
    this.resultTest2 = this.solvePuzzlePart_2(this.testData2);
  }

  solvePart2() {
    this.resultSolved2 = this.solvePuzzlePart_2(this.realData);
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const day = '03';
    this.dataService.getTestDataOfDay(day, 1).subscribe((data: string) => {
      this.testData1 = data.split('\r\n').slice(0, -1);
    });
    this.dataService.getTestDataOfDay(day, 2).subscribe((data: string) => {
      this.testData2 = data.split('\r\n').slice(0, -1);
    });
    this.dataService.getDataOfDay(day).subscribe((data: string) => {
      this.realData = data.split('\r\n').slice(0, -1);
    });
  }
}
