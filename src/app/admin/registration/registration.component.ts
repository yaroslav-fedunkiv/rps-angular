import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../users/user.service";
import {User} from "../../users/create-user.model";
import {ConfirmPasswordValidators} from "../../shared/confirm-password.directive";
import {DataShareService} from "../../error-handler/data.share.service";
import {Observable} from "rxjs";
import {HandleErrorService} from "../../error-handler/handle.error.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  serverErrors$: Observable<any> = this.dataShare.serverError$;

  existedEmailMessage: any = this.userService.existedEmailMessage;
  signUpForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=\"])(?=\\S+$).{8,}$)|(^(?=.*\\d)(?=.*[а-я])(?=.*[А-Я])(?=.*[@#$%^&+=\"])(?=\\S+$).{8,}$)')]),
    confirmPassword: new FormControl('', [Validators.required])
  },  [ConfirmPasswordValidators.MatchValidator('password', 'confirmPassword')]);

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private dataShare: DataShareService,
              private errorService: HandleErrorService) {}


  ngOnInit() {
    this.dataShare.removeServerErrors();
  }


  get passwordMatchError() {
    return (
      this.signUpForm.getError('mismatch') &&
      this.signUpForm.get('confirmPassword')?.touched
    );
  }

  get passwordError() {
    return (
      this.signUpForm.get('mismatch')?.valid &&
      this.signUpForm.get('password')?.touched
    );
  }

  onSubmit(){
    console.log('inside RegistrationComponent ==> '+<User>this.signUpForm.value)
    console.log(this.serverErrors$)
    this.userService.addUser(<User>this.signUpForm.value)
      .subscribe(
        data => {
          console.log('Create user success', data.status);
          this.router.navigate(['/periodicals']);
        }, error => {
          console.log('error inside component: '+error.value);
        }
      );
    console.log('getStatusCode = '+this.errorService.statusCode)
    if (this.errorService.statusCode === '200: ok!'){
      this.router.navigate(['periodicals'])
    }
    //
  }
}
