import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from "rxjs";
import {PublisherService} from "../publisher.service";
import {FullPublisherModel} from "../full-publisher.model";

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css']
})
@Injectable()
export class PublisherListComponent implements  OnInit, OnDestroy{
  publishers: FullPublisherModel[];
  subscription: Subscription;

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
