import { Component } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-day07',
  templateUrl: './day07.component.html',
  styleUrls: ['./day07.component.scss']
})
export class Day07Component {
  testData1: string[] = [];
  testData2: string[] = [];
  realData: string[] = [];

  resultTest1 = 0;
  resultTest2 = 0;
  resultSolved1 = 0;
  resultSolved2 = 0;

  solvePuzzlePart_1(data: string[]): number {
    return 1
  }

  solvePuzzlePart_2(data: string[]): number {
    return 1
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
    const day = '07';
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
