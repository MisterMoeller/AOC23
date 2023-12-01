import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day05Component } from './day05.component';

describe('Day05Component', () => {
  let component: Day05Component;
  let fixture: ComponentFixture<Day05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day05Component]
    });
    fixture = TestBed.createComponent(Day05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
