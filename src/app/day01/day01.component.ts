import { Component } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-day01',
  templateUrl: './day01.component.html',
  styleUrls: ['./day01.component.scss'],
})
export class Day01Component {
  testPart1() {
    const data = this.dataService.getTestDataOfDay("01", 1)
    //todo
  }
  solvePart1() {
    const data = this.dataService.getDataOfDay("01", 1)
    //todo
  }

  testPart2() {
    const data = this.dataService.getTestDataOfDay("01", 2)
    //todo
  }

  solvePart2() {
    const data = this.dataService.getDataOfDay("01", 2)
    //todo
  }

  constructor(private dataService: DataService) {}
}
