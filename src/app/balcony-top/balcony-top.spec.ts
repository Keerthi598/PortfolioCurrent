import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalconyTop } from './balcony-top';

describe('BalconyTop', () => {
  let component: BalconyTop;
  let fixture: ComponentFixture<BalconyTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalconyTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalconyTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
