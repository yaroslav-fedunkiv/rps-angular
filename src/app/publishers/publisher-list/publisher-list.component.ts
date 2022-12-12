import {Component, OnDestroy, OnInit} from '@angular/core';
import {Publisher} from "../publisher.model";
import {Subscription} from "rxjs";
import {PublisherService} from "../publisher.service";

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css']
})
export class PublisherListComponent implements  OnInit, OnDestroy{
  publishers: Publisher[];
  subscription: Subscription;

  constructor(private publisherService: PublisherService) {
  }

  ngOnInit() {
    this.publisherService.publisherChanged.subscribe(
      (publishers: Publisher[]) => {
        this.publishers = publishers;
      }
    );
    this.publishers = this.publisherService.getPublishers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
