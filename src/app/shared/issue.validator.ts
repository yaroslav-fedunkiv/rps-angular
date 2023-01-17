import { AbstractControl } from '@angular/forms';

export function issueValidator(currentIssue: number) {
  return (control: AbstractControl) => {
    const password = control.value;

    if (password.length < 8) {
      return { minLength: true };
    }
    if (!password.match(/[a-z]/)) {
      return { lowercase: true };
    }
    if (!password.match(/[A-Z]/)) {
      return { uppercase: true };
    }
    if (!password.match(/[0-9]/)) {
      return { number: true };
    }
    return null;
  }
}
