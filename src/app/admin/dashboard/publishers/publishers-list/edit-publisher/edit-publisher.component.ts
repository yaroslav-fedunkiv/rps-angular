import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PublisherService} from "../../../../../publishers/publisher.service";
import {CreatePublisherModel} from "../../../../../publishers/create-publisher.model";
import {FullPublisherModel} from "../../../../../publishers/full-publisher.model";

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent implements OnInit{
  topics: string[] = ['NEWS', 'ECONOMY', 'FASHION', 'SCIENCE', 'MUSIC', 'NATURE', 'OTHER'];
  currentPublisher: FullPublisherModel;
  id: number;

  signUpForm = new FormGroup({
    title: new FormControl('', Validators.max(50)),
    topic: new FormControl(''),
    price: new FormControl('', [Validators.min(0)]),
    description: new FormControl('', Validators.maxLength(500)),
    image: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private publisherService: PublisherService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        let id = +params['id'];
        this.id = id;
        this.currentPublisher = this.publisherService.getPublishers().at(id-1) as FullPublisherModel;
      }
    )
  }

  onSubmit(){
    let publisher = <CreatePublisherModel>this.signUpForm.value;
    this.publisherService.editPublisher(this.id, publisher)
      .subscribe(
      data => {
        console.log('Create publisher success', data.status);
      }, error => {
        console.log('error inside component: '+error.value);
      }
    );
    this.router.navigate(['/admin/dashboard/publishers']);
  }

}
