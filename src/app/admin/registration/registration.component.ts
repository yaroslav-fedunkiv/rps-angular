import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../users/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signUpForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        // this.initForm();
      }
    );
  }

  // private initForm(){
  //   this.signUpForm = new FormGroup({
  //     'fullName': new FormControl(this.signUpForm.get('fullName'), Validators.required),
  //     'email': new FormControl(this.signUpForm.get('email'), Validators.required),
  //     'password': new FormControl(this.signUpForm.get('password'), Validators.required),
  //     'confirmPassword': new FormControl(this.signUpForm.get('confirmPassword'), Validators.required)
  //   })
  // }

  onSubmit(){
    console.log('inside RegistrationComponent ==> '+this.signUpForm)
    this.userService.addUser(this.signUpForm.value);
  }

}
