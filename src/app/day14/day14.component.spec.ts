import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day14Component } from './day14.component';

describe('Day14Component', () => {
  let component: Day14Component;
  let fixture: ComponentFixture<Day14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day14Component]
    });
    fixture = TestBed.createComponent(Day14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
