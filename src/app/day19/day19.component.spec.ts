import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19Component } from './day19.component';

describe('Day19Component', () => {
  let component: Day19Component;
  let fixture: ComponentFixture<Day19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day19Component]
    });
    fixture = TestBed.createComponent(Day19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
