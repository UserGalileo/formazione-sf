import {
  CanActivateChildFn,
  CanActivateFn, CanLoadFn, CanMatchFn, Router,
} from '@angular/router';
import {map, tap, timer} from 'rxjs';
import {inject} from '@angular/core';

function isLogged() {
  return timer(1000).pipe(
    map(() => false)
  )
}

export const authGuard: CanMatchFn = (route) => {

  const router = inject(Router);

  return isLogged().pipe(
    tap(is => {
      if (!is) {
        router.navigateByUrl('/login');
      }
    })
  );
}


// CanActivate -> L'utente può visitare la pagina?
// CanLoad (deprecato) -> L'utente può caricare il file?
// CanMatch -> La rotta è da considerarsi valida?
// CanDeactivate -> L'utente può lasciare la pagina?
