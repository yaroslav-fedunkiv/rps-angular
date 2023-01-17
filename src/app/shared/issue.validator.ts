import { AbstractControl } from '@angular/forms';

export function issueValidator(currentIssue: number) {
  return (control: AbstractControl) => {
    const newIssue = control.value;

    if (newIssue <= currentIssue) {
      return { minLength: true };
    }
    return null;
  }
}
