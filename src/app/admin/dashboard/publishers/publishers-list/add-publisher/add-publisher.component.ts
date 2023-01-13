import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmPasswordValidators} from "../../../../../shared/confirm-password.directive";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../users/user.service";
import {DataShareService} from "../../../../../error-handler/data.share.service";
import {User} from "../../../../../users/create-user.model";
@Component({
  selector: 'app-modal-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent {
  topics: string[] = ['NEWS', 'ECONOMY', 'FASHION', 'SCIENCE', 'MUSIC', 'NATURE', 'OTHER']

  serverErrors$: Observable<any> = this.dataShare.serverError$;

  // existedEmailMessage: any = this.userService.existedEmailMessage;
  signUpForm = new FormGroup({
    title: new FormControl('', Validators.required),
    topic: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    pictureUrl: new FormControl('', [Validators.required])
  });

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private dataShare: DataShareService) {}

  onSubmit(){
    console.log('inside RegistrationComponent ==> '+<User>this.signUpForm.value)
    // this.userService.addUser(<User>this.signUpForm.value);
  }

}

