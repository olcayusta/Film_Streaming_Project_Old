import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactiveWatchGuard } from './can-deactive-watch.guard';

describe('CanDeactiveWatchGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactiveWatchGuard]
    });
  });

  it('should ...', inject([CanDeactiveWatchGuard], (guard: CanDeactiveWatchGuard) => {
    expect(guard).toBeTruthy();
  }));
});
