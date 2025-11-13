import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAbout } from './popup-about';

describe('PopupAbout', () => {
  let component: PopupAbout;
  let fixture: ComponentFixture<PopupAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
