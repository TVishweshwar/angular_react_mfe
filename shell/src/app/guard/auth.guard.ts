import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let isLogedIn: boolean = false;
  if (isLogedIn) {
    return true;
  } else {
    alert('You do not have access to this page');
    router.navigate(['/mfe4']);
    return false;
  }
};
