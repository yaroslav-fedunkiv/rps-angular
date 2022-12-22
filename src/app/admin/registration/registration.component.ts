import { Component } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../users/user.service";
import {User} from "../../users/create-user.model";
import {ConfirmPasswordValidators} from "../../shared/confirm-password.directive";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  existedEmailMessage: any = this.userService.existedEmailMessage;
  // confirmPasswordValidationResult: any = null;
  signUpForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=\"])(?=\\S+$).{8,}$)|(^(?=.*\\d)(?=.*[а-я])(?=.*[А-Я])(?=.*[@#$%^&+=\"])(?=\\S+$).{8,}$)')]),
    confirmPassword: new FormControl('', [Validators.required])
  },  [ConfirmPasswordValidators.MatchValidator('password', 'confirmPassword')]);

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {}


  get passwordMatchError() {
    // console.log('inside passwordMatchError: '+this.signUpForm.get('password')?.valid);
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
    this.userService.addUser(<User>this.signUpForm.value);
    // this.existedEmailMessage = this.userService.existedEmailMessage;
    // console.log('a==> ' + this.confirmPasswordValidationResult.value);
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe(
  //     (params: Params)=>{
  //       // this.initForm();
  //     }
  //   );
  // }

  // private initForm(){
  //   this.signUpForm = new FormGroup({
  //     'fullName': new FormControl(this.signUpForm.get('fullName'), Validators.required),
  //     'email': new FormControl(this.signUpForm.get('email'), Validators.required),
  //     'password': new FormControl(this.signUpForm.get('password'), Validators.required),
  //     'confirmPassword': new FormControl(this.signUpForm.get('confirmPassword'), Validators.required)
  //   })
  // }


}
