import { TestBed } from '@angular/core/testing';

import { MarcaResolverGuard } from './marca-resolver.guard';

describe('MarcaResolverGuard', () => {
  let guard: MarcaResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MarcaResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
