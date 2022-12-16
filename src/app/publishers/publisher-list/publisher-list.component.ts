import {Component, Injectable, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {Subscription} from "rxjs";
import {PublisherService} from "../publisher.service";
import {FullPublisherModel} from "../full-publisher.model";

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css']
})
@Injectable()
export class PublisherListComponent implements  OnInit, OnDestroy, OnChanges{
  publishers: FullPublisherModel[];
  subscription: Subscription;
  @Input() currentTopic = this.getCurrentTopic;

  constructor(private publisherService: PublisherService) {
  }

  ngOnInit() {
    // this.publisherService.publisherChanged.subscribe(
    //   (publishers: FullPublisherModel[]) => {
    //     this.publishers = publishers;
    //   }
    // );
    this.publisherService.getAllPublishers().subscribe(
      data => {
        this.publishers = data;
      }
    );
    if (this.publisherService.currentTopic != ''){
      this.publishers = this.publisherService.publishers;
    }
  }

  getCurrentTopic(){
    return this.publisherService.currentTopic;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.publishers = this.publisherService.publishers;
    console.log(this.publishers)
  }

   setPublishers(publishers: FullPublisherModel[]){
     console.log('inside setPublishers() method')
    this.publishers = publishers;
  }

  // getByTopic(){
  //   return this.publisherService;
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
