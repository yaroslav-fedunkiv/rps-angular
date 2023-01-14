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
export class AddPublisherComponent{
  topics: string[] = ['NEWS', 'ECONOMY', 'FASHION', 'SCIENCE', 'MUSIC', 'NATURE', 'OTHER']

  private unsubscribe$ = new Subject<void>();
  serverErrors$: Observable<any> = this.dataShare.serverError$;
  statusCode = 0;
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
    this.serverErrors$.subscribe(data => {
      console.log(data.value)
    })
    let publisher = <CreatePublisherModel>this.signUpForm.value;
    publisher.price = Number(publisher.price).toFixed(2);
    if (publisher.image === null || publisher.image === ''){
      publisher.image = 'https://sciendo.com/product-not-found.png'
    }
    console.log('inside AddPublisherComponent ==> '+<CreatePublisherModel>this.signUpForm.value)
    this.publisherService.addPublisher(publisher)
      .subscribe(
        data => {
          console.log('Create publisher success', data.status);
            this.router.navigate(['/admin/dashboard/publishers']);
        }, error => {
          console.log('error inside component: '+error.value);
        }
      );

  }

}

