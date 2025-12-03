import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segment } from './segment';

describe('Segment', () => {
  let component: Segment;
  let fixture: ComponentFixture<Segment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
