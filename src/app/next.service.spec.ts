import { TestBed } from '@angular/core/testing';

import { NextService } from "./next.service";

describe('NextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextService = TestBed.get(NextService);
    expect(service).toBeTruthy();
  });
});
