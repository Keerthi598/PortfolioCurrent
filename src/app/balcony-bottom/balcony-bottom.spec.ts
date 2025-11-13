import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalconyBottom } from './balcony-bottom';

describe('BalconyBottom', () => {
  let component: BalconyBottom;
  let fixture: ComponentFixture<BalconyBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalconyBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalconyBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
