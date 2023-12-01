import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Component } from './day7.component';

describe('Day7Component', () => {
  let component: Day7Component;
  let fixture: ComponentFixture<Day7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day7Component]
    });
    fixture = TestBed.createComponent(Day7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
