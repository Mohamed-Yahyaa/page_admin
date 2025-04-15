import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { yourGuardNameGuard } from './your-guard-name.guard';

describe('yourGuardNameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => yourGuardNameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
