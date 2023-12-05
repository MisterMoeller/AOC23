import { Component, SimpleChange } from '@angular/core';
import { DataService } from '../data-service.service';
import { AlmanacCategory, Ranges, SimpleRange, calcValueOfLevel_Part1, myType, parseData } from './helperFunctions';

@Component({
  selector: 'app-day05',
  templateUrl: './day05.component.html',
  styleUrls: ['./day05.component.scss'],
})
export class Day05Component {
  testData1: string = '';
  testData2: string = '';
  realData: string = '';

  resultTest1 = 0;
  resultTest2 = 0;
  resultSolved1 = 0;
  resultSolved2 = 0;

  solvePuzzlePart_1(data: string): number {
    const parsedData = parseData(data);
    const seeds = parsedData.seeds;
    const seedsAfterLvl1 = calcValueOfLevel_Part1(seeds, parsedData.categories[0].entries);
    const seedsAfterLvl2 = calcValueOfLevel_Part1(seedsAfterLvl1, parsedData.categories[1].entries);
    const seedsAfterLvl3 = calcValueOfLevel_Part1(seedsAfterLvl2, parsedData.categories[2].entries);
    const seedsAfterLvl4 = calcValueOfLevel_Part1(seedsAfterLvl3, parsedData.categories[3].entries);
    const seedsAfterLvl5 = calcValueOfLevel_Part1(seedsAfterLvl4, parsedData.categories[4].entries);
    const seedsAfterLvl6 = calcValueOfLevel_Part1(seedsAfterLvl5, parsedData.categories[5].entries);
    const seedsAfterLvl7 = calcValueOfLevel_Part1(seedsAfterLvl6, parsedData.categories[6].entries);
    return Math.min(...seedsAfterLvl7);
  }

  solvePuzzlePart_2(data: string): number {
    const parsedData = parseData(data);
    const seeds = parsedData.seeds;

    const entriesFirstLevel = parsedData.categories[0].entries;

    const ranges: Ranges[] = [];

    const myRanges: myType[] = [];

    let rangesFromLastLevelToLookAt: SimpleRange[] = [
      { start: seeds[0], end: seeds[0] + seeds[1] - 1 },
      { start: seeds[2], end: seeds[2] + seeds[3] - 1 },
    ];
    const restRangesToLookAt: SimpleRange[] = [];
    console.log(entriesFirstLevel);

    do {
      for (let range of rangesFromLastLevelToLookAt) {
        let rangeHadAHit = false;
        for (let entry of entriesFirstLevel) {
          if (range.start >= entry.sourceRangeStart && range.end <= entry.sourceRangeStart + entry.rangeLength) {
            // ranges.push({
            //   sourceRangeStart: range.start,
            //   destinationRangeStart: entry.destinationRangeStart + (range.start - entry.sourceRangeStart),
            //   rangeLength: range.end - range.start,
            // });
            const newmyType = {
              start: entry.destinationRangeStart + (range.start - entry.sourceRangeStart),
              end: entry.destinationRangeStart + (range.start - entry.sourceRangeStart) + (range.end - range.start),
            };
            myRanges.push({
              rangeFromLastLevel: range,
              mappedToDestinationRange: newmyType,
            });
            console.log(
              `Range from last level ${range.start} ${range.end}. It is completely in sourceRange ${
                entry.sourceRangeStart
              } ${entry.sourceRangeStart + entry.rangeLength} and mapps to ${newmyType.start} - ${newmyType.end}`
            );
            rangeHadAHit = true;
            break;
          }

          if (
            range.start >= entry.sourceRangeStart &&
            range.start <= entry.sourceRangeStart + entry.rangeLength &&
            range.end > entry.sourceRangeStart + entry.rangeLength
          ) {
            console.log(
              `Range from last level ${range.start} ${range.end}. The start is in sourceRange ${
                entry.sourceRangeStart
              } ${entry.sourceRangeStart + entry.rangeLength}`
            );
            // ranges.push({
            //   sourceRangeStart: range.start,
            //   destinationRangeStart:
            //     entry.destinationRangeStart + (entry.sourceRangeStart + entry.rangeLength - range.start),
            //   rangeLength: range.start - entry.sourceRangeStart,
            // });

            const newmyType = {
              start: entry.destinationRangeStart + (range.start - entry.sourceRangeStart),
              end: entry.destinationRangeStart + (range.start - entry.sourceRangeStart) + (range.end - range.start),
            };
            myRanges.push({
              rangeFromLastLevel: range,
              mappedToDestinationRange: newmyType,
            });

            restRangesToLookAt.push({
              start: entry.sourceRangeStart + entry.rangeLength,
              end: range.end,
            });

            rangeHadAHit = true;
            break;
          }

          if (
            range.start < entry.sourceRangeStart &&
            range.end > entry.sourceRangeStart &&
            range.end < entry.sourceRangeStart + entry.rangeLength
          ) {
            console.log(
              `Range from last level ${range.start} ${range.end}. The End is in sourceRange ${entry.sourceRangeStart} ${
                entry.sourceRangeStart + entry.rangeLength
              }`
            );
            ranges.push({
              sourceRangeStart: entry.sourceRangeStart,
              destinationRangeStart: entry.destinationRangeStart,
              rangeLength: range.end - entry.sourceRangeStart,
            });

            restRangesToLookAt.push({
              start: range.start,
              end: entry.sourceRangeStart,
            });

            rangeHadAHit = true;
            break;
          }

          if (range.start < entry.sourceRangeStart && range.end > entry.sourceRangeStart + entry.rangeLength) {
            console.log(
              `Range from last level ${range.start} ${range.end}. sourceRange is completely in Range ${
                entry.sourceRangeStart
              } ${entry.sourceRangeStart + entry.rangeLength}`
            );
            ranges.push({
              sourceRangeStart: entry.sourceRangeStart,
              destinationRangeStart: entry.destinationRangeStart,
              rangeLength: entry.rangeLength,
            });

            restRangesToLookAt.push({
              start: entry.sourceRangeStart + entry.rangeLength,
              end: range.end,
            });

            restRangesToLookAt.push({
              start: range.start,
              end: entry.sourceRangeStart,
            });

            rangeHadAHit = true;
          }
        }

        if (!rangeHadAHit) {
          console.log(`Range from last level ${range.start} ${range.end}. Direct Mapping`);
          ranges.push({
            sourceRangeStart: range.start,
            destinationRangeStart: range.start,
            rangeLength: range.end - range.start,
          });
        }
      }

      rangesFromLastLevelToLookAt = [...restRangesToLookAt.splice(0)];
    } while (rangesFromLastLevelToLookAt.length > 0);

    console.log('erster durchlauf fertig. Ranges ');
    console.log(ranges);

    return 1;
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
    const day = '05';
    this.dataService.getTestDataOfDay(day, 1).subscribe((data: string) => {
      this.testData1 = data;
    });
    this.dataService.getTestDataOfDay(day, 2).subscribe((data: string) => {
      this.testData2 = data;
    });
    this.dataService.getDataOfDay(day).subscribe((data: string) => {
      this.realData = data;
    });
  }
}
