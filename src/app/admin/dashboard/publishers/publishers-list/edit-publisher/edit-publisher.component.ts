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

  signUpForm = new FormGroup({
    title: new FormControl('', Validators.required),
    topic: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
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
        this.currentPublisher = this.publisherService.getPublishers().at(id-1) as FullPublisherModel;
      }
    )
  }

  onSubmit(){

  }

}
