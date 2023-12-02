import { Component } from '@angular/core';
import { DataService } from '../data-service.service';
import {
  getHighestAmountOfColor,
  parseDataToGame_day02,
} from './helperFunctions';
import { Game } from './types';

@Component({
  selector: 'app-day02',
  templateUrl: './day02.component.html',
  styleUrls: ['./day02.component.scss'],
})
export class Day02Component {
  testData1: string[] = [];
  testData2: string[] = [];
  realData: string[] = [];

  resultTest1 = 0;
  resultTest2 = 0;
  resultSolved1 = 0;
  resultSolved2 = 0;

  solvePuzzlePart_1(data: string[]): number {
    const parsedGames: Game[] = parseDataToGame_day02(data);

    const passingGames = parsedGames.filter((game) => {
      return (
        getHighestAmountOfColor(game, 'r') <= 12 &&
        getHighestAmountOfColor(game, 'g') <= 13 &&
        getHighestAmountOfColor(game, 'b') <= 14
      );
    });

    return passingGames
      .map((game) => game.id)
      .reduce((prev, cur) => prev + cur);
  }

  solvePuzzlePart_2(data: string[]): number {
    const parsedGames: Game[] = parseDataToGame_day02(data);

    return parsedGames
      .map((game) => {
        return (
          getHighestAmountOfColor(game, 'r') *
          getHighestAmountOfColor(game, 'g') *
          getHighestAmountOfColor(game, 'b')
        );
      })
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
    const day = '02';
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
