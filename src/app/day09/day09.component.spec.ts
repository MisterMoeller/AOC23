import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day09Component } from './day09.component';

describe('Day09Component', () => {
  let component: Day09Component;
  let fixture: ComponentFixture<Day09Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day09Component]
    });
    fixture = TestBed.createComponent(Day09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
