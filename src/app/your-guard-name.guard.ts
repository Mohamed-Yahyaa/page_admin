import { CanActivateFn } from '@angular/router';

export const yourGuardNameGuard: CanActivateFn = (route, state) => {
  return true;
};
