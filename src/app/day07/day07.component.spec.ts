import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day07Component } from './day07.component';

describe('Day07Component', () => {
  let component: Day07Component;
  let fixture: ComponentFixture<Day07Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day07Component]
    });
    fixture = TestBed.createComponent(Day07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
