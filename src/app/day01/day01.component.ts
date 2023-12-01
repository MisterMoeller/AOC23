import { Component } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-day01',
  templateUrl: './day01.component.html',
  styleUrls: ['./day01.component.scss']
})
export class Day01Component {
  constructor(private dataService: DataService) {

  }

}
