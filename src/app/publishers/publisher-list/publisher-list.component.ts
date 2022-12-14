import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {Publisher} from "../publisher.model";
import {Subscription} from "rxjs";
import {PublisherService} from "../publisher.service";
import {FullPublisherModel} from "../full-publisher.model";

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css']
})
@Injectable({providedIn: 'root'})
export class PublisherListComponent implements  OnInit, OnDestroy{
  // publishers: Publisher[];
  publishers: FullPublisherModel[];
  subscription: Subscription;

  constructor(private publisherService: PublisherService) {
  }

  ngOnInit() {
    this.publisherService.publisherChanged.subscribe(
      // (publishers: Publisher[]) => {
      (publishers: FullPublisherModel[]) => {
        this.publishers = publishers;
      }
    );
    this.publishers = <FullPublisherModel[]><unknown>this.publisherService.getAllPublishers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
