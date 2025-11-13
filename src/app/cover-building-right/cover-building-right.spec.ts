import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverBuildingRight } from './cover-building-right';

describe('CoverBuildingRight', () => {
  let component: CoverBuildingRight;
  let fixture: ComponentFixture<CoverBuildingRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverBuildingRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverBuildingRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
