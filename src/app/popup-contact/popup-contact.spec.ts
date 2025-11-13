import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContact } from './popup-contact';

describe('PopupContact', () => {
  let component: PopupContact;
  let fixture: ComponentFixture<PopupContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
