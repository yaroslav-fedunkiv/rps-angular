import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FullPublisherModel} from "./full-publisher.model";
import {map} from "rxjs/operators";

@Injectable()
export class PublisherService{
  publisherChanged = new Subject<FullPublisherModel[]>();
  publishers: FullPublisherModel[];
  activePublishers: FullPublisherModel[];
  publishersByTopic: FullPublisherModel[];
  currentTopic = '';

  constructor(private http: HttpClient) {}

  getPublishers(){
    return this.publishers.slice();
  }

  getAllPublishers(){
    return this.http.get<FullPublisherModel[]>('http://localhost:8080/publishers/get-all')
      .pipe(map(publishers=> {
        this.publishers = publishers.slice(); // make a copy of the array
        return this.publishers;
      }));
  }

  getAllActivePublishers(){
    return this.http.get<FullPublisherModel[]>('http://localhost:8080/publishers/get/all-active')
      .pipe(map(publishers => {
        this.activePublishers = publishers.slice(); // make a copy of the array
        return this.activePublishers;
      }));
  }

  deactivatePublisher(id: number) {
    const publishers = this.getPublishers();
    if (publishers) {
      const publisher = publishers.at(id-1);
      if (publisher) {
        publisher.isActive = 'false';
      }
    }
    return this.http.delete(`http://localhost:8080/publishers/deactivate/${id}`, {});
  }

  activatePublisher(id: number){
    const publishers = this.getPublishers();
    if (publishers) {
      const publisher = publishers.at(id-1);
      if (publisher) {
        publisher.isActive = 'true';
      }
    }
    return this.http.delete(`http://localhost:8080/publishers/activate/${id}`, {});
  }

  getAllTopics(){
    return this.publishers.map((item) => item.topic)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  sortByTitle(){
    this.publishers.sort((a, b) => (a.title < b.title ? -1 : 1));
  }

  sortByPrice(){
    this.publishers.sort((a, b) => (+a.price < +b.price ? -1 : 1));
  }

  getByTopic(topic: string) {
    this.currentTopic = topic;
    console.log(this.currentTopic);
      this.publishersByTopic = this.publishers.filter(obj => {
      return obj.topic === topic;
    });
  }
}
