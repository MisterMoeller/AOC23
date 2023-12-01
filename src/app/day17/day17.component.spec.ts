import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Component } from './day17.component';

describe('Day17Component', () => {
  let component: Day17Component;
  let fixture: ComponentFixture<Day17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day17Component]
    });
    fixture = TestBed.createComponent(Day17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
