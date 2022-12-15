import {Component, Injectable, OnInit} from '@angular/core';
import {PublisherService} from "../publishers/publisher.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit{
  allTopics: string[] = [];

  constructor(private publisherService: PublisherService) {
  }

  async ngOnInit() {
    await new Promise(f => setTimeout(f, 1000));
    this.allTopics = this.publisherService.getAllTopics();
  }

  sortByTitle(){
    this.publisherService.sortByTitle();
  }

  sortByPrice(){
    this.publisherService.sortByPrice();
  }
}
