import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBuilding } from './right-building';

describe('RightBuilding', () => {
  let component: RightBuilding;
  let fixture: ComponentFixture<RightBuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightBuilding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightBuilding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
