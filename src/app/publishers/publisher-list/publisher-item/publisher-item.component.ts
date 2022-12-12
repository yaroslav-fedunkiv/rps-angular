import {Component, Inject, Injectable, Input} from '@angular/core';
import {Publisher} from "../../publisher.model";

@Component({
  selector: 'app-publisher-item',
  templateUrl: './publisher-item.component.html',
  styleUrls: ['./publisher-item.component.css']
})
export class PublisherItemComponent{
  @Injectable()
  @Input() publisher: Publisher;
  @Input()  index: number;


  constructor(publisher: Publisher, @Inject(Number) index: number) {
    this.publisher = publisher;
    this.index = index;
  }
}
