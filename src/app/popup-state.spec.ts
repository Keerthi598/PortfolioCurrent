import { TestBed } from '@angular/core/testing';

import { PopupState } from './popup-state';

describe('PopupState', () => {
  let service: PopupState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
