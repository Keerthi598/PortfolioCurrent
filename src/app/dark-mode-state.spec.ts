import { TestBed } from '@angular/core/testing';

import { DarkModeState } from './dark-mode-state';

describe('DarkModeState', () => {
  let service: DarkModeState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
