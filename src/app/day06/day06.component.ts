import { Component } from '@angular/core';
import { Race } from './types';
import { getChargeTimesThatBeatRecord } from './helperFunctions';

@Component({
  selector: 'app-day06',
  templateUrl: './day06.component.html',
  styleUrls: ['./day06.component.scss'],
})
export class Day06Component {
  testData1: Race[] = [];
  testData2: Race[] = [];
  realData: Race[] = [];
  realData2: Race[] = [];

  resultTest1 = 0;
  resultTest2 = 0;
  resultSolved1 = 0;
  resultSolved2 = 0;

  solvePuzzlePart_1(data: Race[]): number {
    return data.map((race) => getChargeTimesThatBeatRecord(race).length).reduce((prev, cur) => prev * cur, 1);
  }

  solvePuzzlePart_2(data: Race[]): number {
    return getChargeTimesThatBeatRecord(data[0]).length;
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
    this.resultSolved2 = this.solvePuzzlePart_2(this.realData2);
  }

  ngOnInit() {
    this.testData1 = [
      { time: 7, record: 9 },
      { time: 15, record: 40 },
      { time: 30, record: 200 },
    ];
    this.testData2 = [{ time: 71530, record: 940200 }];
    this.realData = [
      { time: 38, record: 241 },
      { time: 94, record: 1549 },
      { time: 79, record: 1074 },
      { time: 70, record: 1091 },
    ];
    this.realData2 = [{ time: 38947970, record: 241154910741091 }];
  }
}
