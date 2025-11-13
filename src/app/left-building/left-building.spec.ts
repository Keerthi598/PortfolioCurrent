import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBuilding } from './left-building';

describe('LeftBuilding', () => {
  let component: LeftBuilding;
  let fixture: ComponentFixture<LeftBuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftBuilding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftBuilding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
