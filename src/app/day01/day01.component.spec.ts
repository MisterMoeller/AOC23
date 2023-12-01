import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day01Component } from './day01.component';

describe('Day01Component', () => {
  let component: Day01Component;
  let fixture: ComponentFixture<Day01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day01Component]
    });
    fixture = TestBed.createComponent(Day01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
