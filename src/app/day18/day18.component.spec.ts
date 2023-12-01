import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18Component } from './day18.component';

describe('Day18Component', () => {
  let component: Day18Component;
  let fixture: ComponentFixture<Day18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day18Component]
    });
    fixture = TestBed.createComponent(Day18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
