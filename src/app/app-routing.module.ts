import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { Day10Component } from './day10/day10.component';
import { Day11Component } from './day11/day11.component';
import { Day12Component } from './day12/day12.component';
import { Day13Component } from './day13/day13.component';
import { Day14Component } from './day14/day14.component';
import { Day15Component } from './day15/day15.component';
import { Day16Component } from './day16/day16.component';
import { Day17Component } from './day17/day17.component';
import { Day18Component } from './day18/day18.component';
import { Day19Component } from './day19/day19.component';
import { Day2Component } from './day2/day2.component';
import { Day20Component } from './day20/day20.component';
import { Day21Component } from './day21/day21.component';
import { Day22Component } from './day22/day22.component';
import { Day23Component } from './day23/day23.component';
import { Day24Component } from './day24/day24.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';
import { Day9Component } from './day9/day9.component';

const routes: Routes = [
  { path: "1", component: Day1Component },
  { path: "2", component: Day2Component },
  { path: "3", component: Day3Component },
  { path: "4", component: Day4Component },
  { path: "5", component: Day5Component },
  { path: "6", component: Day6Component },
  { path: "7", component: Day7Component },
  { path: "8", component: Day8Component },
  { path: "9", component: Day9Component },
  { path: "10", component: Day10Component },
  { path: "11", component: Day11Component },
  { path: "12", component: Day12Component },
  { path: "13", component: Day13Component },
  { path: "14", component: Day14Component },
  { path: "15", component: Day15Component },
  { path: "16", component: Day16Component },
  { path: "17", component: Day17Component },
  { path: "18", component: Day18Component },
  { path: "19", component: Day19Component },
  { path: "20", component: Day20Component },
  { path: "21", component: Day21Component },
  { path: "22", component: Day22Component },
  { path: "23", component: Day23Component },
  { path: "24", component: Day24Component },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
