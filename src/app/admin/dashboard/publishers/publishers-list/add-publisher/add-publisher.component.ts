import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmPasswordValidators} from "../../../../../shared/confirm-password.directive";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../users/user.service";
import {DataShareService} from "../../../../../error-handler/data.share.service";
import {User} from "../../../../../users/create-user.model";
import {PublisherService} from "../../../../../publishers/publisher.service";
import {CreatePublisherModel} from "../../../../../publishers/create-publisher.model";
import {publish, takeUntil} from "rxjs/operators";
@Component({
  selector: 'app-modal-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit, OnDestroy {
  topics: string[] = ['NEWS', 'ECONOMY', 'FASHION', 'SCIENCE', 'MUSIC', 'NATURE', 'OTHER']

  private unsubscribe$ = new Subject<void>();
  serverErrors$: Observable<string>;
  // serverError = this.publisherService.errorMessage;

  // existedEmailMessage: any = this.userService.existedEmailMessage;
  signUpForm = new FormGroup({
    title: new FormControl('', Validators.required),
    topic: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', Validators.maxLength(500)),
    image: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private publisherService: PublisherService,
              private router: Router,
              private dataShare: DataShareService) {}

  onSubmit(){
    let publisher = <CreatePublisherModel>this.signUpForm.value;
    publisher.price = Number(publisher.price).toFixed(2);
    console.log('inside RegistrationComponent ==> '+<CreatePublisherModel>this.signUpForm.value)
    this.publisherService.addPublisher(publisher)
      .subscribe(
        data => {
          console.log('Create publisher success', data);
          // do something with the success data
        },
        error => {
          if(error.status === 400) {
            this.serverErrors$ = error.error.errors;
            // this.serverFieldErrors = error.error.fields;
          }else {
            console.log('An error occurred:', error.error);
          }
        }
      );
  }

  ngOnInit() {
    // this.serverErrors$ = this.publisherService.addPublisher(publisher)
    //   .pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy() {
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
  }

}

