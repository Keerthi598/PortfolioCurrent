import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProjects } from './popup-projects';

describe('PopupProjects', () => {
  let component: PopupProjects;
  let fixture: ComponentFixture<PopupProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
