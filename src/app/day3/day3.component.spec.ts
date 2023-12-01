import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Component } from './day3.component';

describe('Day3Component', () => {
  let component: Day3Component;
  let fixture: ComponentFixture<Day3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day3Component]
    });
    fixture = TestBed.createComponent(Day3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
