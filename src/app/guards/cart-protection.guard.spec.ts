import { TestBed } from '@angular/core/testing';

import { CartProtectionGuard } from './cart-protection.guard';

describe('CartProtectionGuard', () => {
  let guard: CartProtectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CartProtectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
