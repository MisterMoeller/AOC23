import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20Component } from './day20.component';

describe('Day20Component', () => {
  let component: Day20Component;
  let fixture: ComponentFixture<Day20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day20Component]
    });
    fixture = TestBed.createComponent(Day20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
