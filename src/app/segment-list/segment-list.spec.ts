import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentList } from './segment-list';

describe('SegmentList', () => {
  let component: SegmentList;
  let fixture: ComponentFixture<SegmentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
