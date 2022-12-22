import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../users/user.service";
import {User} from "../../users/create-user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signUpForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=\"])(?=\\S+$).{8,}$)|(^(?=.*\\d)(?=.*[а-я])(?=.*[А-Я])(?=.*[@#$%^&+=\"])(?=\\S+$).{8,}$)')]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {}

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

  onSubmit(){
    console.log('inside RegistrationComponent ==> '+<User>this.signUpForm.value)
    this.userService.addUser(<User>this.signUpForm.value);
  }

}
