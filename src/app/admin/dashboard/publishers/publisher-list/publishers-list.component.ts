import {Component, OnInit} from '@angular/core';
import {FullPublisherModel} from "../../../../publishers/full-publisher.model";
import {PublisherService} from "../../../../publishers/publisher.service";

@Component({
  selector: 'app-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.css']
})
export class PublishersListComponent implements OnInit{
  publishers: FullPublisherModel[];


  constructor(private publisherService: PublisherService) {
  }

  ngOnInit() {
    this.publisherService.getAllPublishers().subscribe(
      data => {
        this.publishers = data;
      }
    );
  }
}
