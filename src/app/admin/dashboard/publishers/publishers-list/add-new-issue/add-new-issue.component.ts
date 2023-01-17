import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FullPublisherModel} from "../../../../../publishers/full-publisher.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PublisherService} from "../../../../../publishers/publisher.service";
import {CreatePublisherModel} from "../../../../../publishers/create-publisher.model";
import {issueValidator} from "../../../../../shared/issue.validator";

@Component({
  selector: 'app-add-new-issue',
  templateUrl: './add-new-issue.component.html',
  styleUrls: ['./add-new-issue.component.css']
})
export class AddNewIssueComponent implements OnInit{
  currentPublisher: FullPublisherModel;
  currentIssue: number;
  id: number;
  signUpForm: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private publisherService: PublisherService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        let id = +params['id'];
        this.id = id;
        let publisher = this.publisherService
          .getPublishers()
          .at(id-1) as FullPublisherModel;
        this.currentPublisher = publisher;
        this.currentIssue = +publisher.issue;
        this.signUpForm = new FormGroup({
            issue: new FormControl('', [Validators.required, issueValidator(this.getIssue)]),
            image: new FormControl('')
          });
        console.log('inside ngOnInit() currentIssue = ' + this.currentIssue);
      }
    )
  }

  private get getIssue(){
    return +this.currentIssue;
  }

  onSubmit(){
    let publisher = <CreatePublisherModel>this.signUpForm.value;

    if (publisher.issue !== null && publisher.issue !== undefined){
      this.currentIssue = +publisher.issue;
    }

    this.publisherService.addNewIssue(this.id, publisher)
      .subscribe(
        data => {
          console.log('Create publisher success', data.status);
        }, error => {
          console.log('error inside component: '+error.value);
        }
      );
    this.router.navigate(['/admin/dashboard/publishers'])
  }
}
