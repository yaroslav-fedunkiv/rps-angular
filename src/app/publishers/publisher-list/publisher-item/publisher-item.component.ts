import {Component, Input} from '@angular/core';
import {Publisher} from "../../publisher.model";

@Component({
  selector: 'app-publisher-item',
  templateUrl: './publisher-item.component.html',
  styleUrls: ['./publisher-item.component.css']
})
export class PublisherItemComponent{
  @Input() publisher: Publisher;
  @Input() index: number;

  constructor() {
  }
}
