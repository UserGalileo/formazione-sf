import {ValidatorFn} from '@angular/forms';

export const credentialsValidator = (forbiddenName: string, forbiddenLastName: string): ValidatorFn => (control) => {
  // const { firstName, lastName } = control.value;
  const firstName = control.value.firstName || '';
  const lastName = control.value.lastName || '';

  if (firstName.toLowerCase() === forbiddenName && lastName.toLowerCase() === forbiddenLastName) {
    return {
      forbidden: true
    }
  }

  return null;
}

