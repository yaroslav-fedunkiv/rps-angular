import {Component, Input} from '@angular/core';
import {FullPublisherModel} from "../../../../../publishers/full-publisher.model";

@Component({
  selector: 'app-publishers-item',
  templateUrl: './publishers-item.component.html',
  styleUrls: ['./publishers-item.component.css']
})
export class PublishersItemComponent {
  @Input() publisher: FullPublisherModel;
  @Input() index: number;
}
