import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { returnFirstNumber, returnLastNumber } from './helperFunctions';

@Component({
  selector: 'app-day01',
  templateUrl: './day01.component.html',
  styleUrls: ['./day01.component.scss'],
})
export class Day01Component implements OnInit {
  testData1: string[] = [];
  testData2: string[] = [];
  realData: string[] = [];

  resultTest1 = 0;
  resultTest2 = 0;
  resultSolved1 = 0;
  resultSolved2 = 0;

  solvePuzzlePart_1(data: string[]): number {
    const convertedToNumbers: number[] = data.map((str: string): number => {
      const onlyNumbers = str.match(/\d/g);
      if (!onlyNumbers) {
        console.error('something wrong with onlyNumbers', onlyNumbers);
        return 0;
      }
      const stringsAsNumber: number = Number.parseInt(
        onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1]
      );
      return stringsAsNumber;
    });
    const result = convertedToNumbers.reduce(
      (prev: number, current: number) => {
        return prev + current;
      },
      0
    );
    return result;
  }

  solvePuzzlePart_2(data: string[]): number {
    const convertedToNumbers: number[] = data.map((str: string): number => {
      const firstDigit: string = returnFirstNumber(str);
      const secondDigit: string = returnLastNumber(str);

      const stringsAsNumber: number = Number.parseInt(firstDigit + secondDigit);
      return stringsAsNumber;
    });
    const result = convertedToNumbers.reduce(
      (prev: number, current: number) => {
        return prev + current;
      },
      0
    );
    return result;
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
    this.dataService.getTestDataOfDay('01', 1).subscribe((data: string) => {
      this.testData1 = data.split('\r\n').slice(0, -1);
    });
    this.dataService.getTestDataOfDay('01', 2).subscribe((data: string) => {
      this.testData2 = data.split('\r\n').slice(0, -1);
    });
    this.dataService.getDataOfDay('01').subscribe((data: string) => {
      this.realData = data.split('\r\n').slice(0, -1);
    });
  }
}
