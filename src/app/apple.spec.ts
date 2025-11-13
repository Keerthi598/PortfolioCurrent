import { TestBed } from '@angular/core/testing';

import { Apple } from './apple';

describe('Apple', () => {
  let service: Apple;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apple);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
