import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FullPublisherModel} from "../../../../../publishers/full-publisher.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PublisherService} from "../../../../../publishers/publisher.service";
// import {IssueValidator} from "../../../../../shared/issue.validator";
import {CreatePublisherModel} from "../../../../../publishers/create-publisher.model";
import {issueValidator} from "../../../../../shared/issue.validator";

@Component({
  selector: 'app-add-new-issue',
  templateUrl: './add-new-issue.component.html',
  styleUrls: ['./add-new-issue.component.css']
})
export class AddNewIssueComponent implements OnInit{
  currentPublisher: FullPublisherModel;
  currentIssue: number = 1;
  id: number;

  signUpForm = new FormGroup({
    issue: new FormControl('', [Validators.required, issueValidator(this.currentIssue)]),
    image: new FormControl('')
  },
    // [IssueValidator.MatchValidator(this.currentPublisher.issue, 'issue')]
  );

  constructor(private route: ActivatedRoute,
              private router: Router,
              private publisherService: PublisherService) {
    // this.currentPublisher = undefined;
  }


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
      }
    )
  }

  onSubmit(){
    let publisher = <CreatePublisherModel>this.signUpForm.value;
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
