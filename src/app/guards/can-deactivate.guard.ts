import {CanDeactivateFn} from '@angular/router';


export const canDeactivateGuard: CanDeactivateFn<any> = (component) => {
  return component.canLeave();
}
