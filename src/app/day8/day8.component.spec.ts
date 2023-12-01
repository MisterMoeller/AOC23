import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8Component } from './day8.component';

describe('Day8Component', () => {
  let component: Day8Component;
  let fixture: ComponentFixture<Day8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day8Component]
    });
    fixture = TestBed.createComponent(Day8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
