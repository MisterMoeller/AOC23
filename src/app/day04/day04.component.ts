import { Component } from '@angular/core';
import { DataService } from '../data-service.service';
import { parseData } from './helperFunctions';
import { Card, ReducedCard as ReducedCard } from './types';

@Component({
  selector: 'app-day04',
  templateUrl: './day04.component.html',
  styleUrls: ['./day04.component.scss'],
})
export class Day04Component {
  testData1: string[] = [];
  testData2: string[] = [];
  realData: string[] = [];

  resultTest1 = 0;
  resultTest2 = 0;
  resultSolved1 = 0;
  resultSolved2 = 0;

  solvePuzzlePart_1(data: string[]): number {
    const cards: Card[] = parseData(data);
    for (let card of cards) {
      card.hits = card.winningNumbers.filter((winningNumber: number) => {
        if (card.pickedNumbers.includes(winningNumber)) {
          return card.pickedNumbers.includes(winningNumber);
        }
        return false;
      }).length;

      if (card.hits > 0) {
        card.value = Math.pow(2, card.hits - 1);
      }
    }

    return cards.map((card) => card.value).reduce((prev, cur) => prev + cur);
  }

  solvePuzzlePart_2(data: string[]): number {
    const cards: Card[] = parseData(data);
    for (let card of cards) {
      card.hits = card.winningNumbers.filter((winningNumber: number) => {
        if (card.pickedNumbers.includes(winningNumber)) {
          return card.pickedNumbers.includes(winningNumber);
        }
        return false;
      }).length;
    }

    const reducedCards: ReducedCard[] = cards.map((card) => {
      return { amount: 1, hits: card.hits } as ReducedCard;
    });

    for (let i = 0; i < reducedCards.length; i++) {
      const currentCard = reducedCards[i];

      for (let j = 1; j <= currentCard.hits; j++) {
        reducedCards[i + j].amount += currentCard.amount;
      }
    }

    return reducedCards.map((card) => card.amount).reduce((prev, cur) => prev + cur);
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
    const day = '04';
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
