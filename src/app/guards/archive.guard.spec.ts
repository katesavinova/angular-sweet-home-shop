import { TestBed } from '@angular/core/testing';

import { ArchiveGuard } from './archive.guard';

describe('ArchiveGuard', () => {
  let guard: ArchiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ArchiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
