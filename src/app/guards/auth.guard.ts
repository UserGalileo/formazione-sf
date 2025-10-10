import {
  CanActivateChildFn,
  CanActivateFn, CanLoadFn, CanMatchFn,
} from '@angular/router';

export const authGuard: CanMatchFn = (route) => {
  return false;
}


// CanActivate -> L'utente può visitare la pagina?
// CanLoad (deprecato) -> L'utente può caricare il file?
// CanMatch -> La rotta è da considerarsi valida?
// CanDeactivate -> L'utente può lasciare la pagina?
