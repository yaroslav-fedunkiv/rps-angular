import {Injectable} from "@angular/core";
import {Publisher} from "./publisher.model";
import {Subject} from "rxjs";

@Injectable()
export class PublisherService{
  publisherChanged = new Subject<Publisher[]>();

  private publishers: Publisher[] = [
    new Publisher('Time',
      'Time journal',
      'https://secure.static.meredith.com/crt/store/covers/magazines/nmo/1850_l.jpg',
      56.55),
    new Publisher('The Economist',
      'The Economist journal',
      'https://uc.od.ua/content/documents/12480/1247938/thumb-item-640x899-5791.jpg',
      99.99),
    new Publisher('Fashion',
      'Vogue journal',
      'https://vogueprod.blob.core.windows.net/vogueoutput20201101thumbnails/Covers/0x600/20201101.jpg',
      45.78),
  ];

  getPublishers(){
    return this.publishers.slice();
  }
}
