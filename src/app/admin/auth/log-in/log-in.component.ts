import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../../users/user.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loginForm: NgForm;


  constructor(private userService: UserService) {
  }

  login(form: NgForm){
    this.loginForm = form;
    this.userService.login(form.value.email, form.value.password);
    console.log(form.value.search);
  }

}
