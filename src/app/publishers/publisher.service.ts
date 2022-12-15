import {Injectable} from "@angular/core";
import {map, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FullPublisherModel} from "./full-publisher.model";

@Injectable()
export class PublisherService{
  publisherChanged = new Subject<FullPublisherModel[]>();
  publishers: FullPublisherModel[];
  currentTopic = '';

  constructor(private http: HttpClient) {}

  getPublishers(){
    return this.publishers.slice();
  }
  getRecipe(index: number){
    return this.publishers[index];
  }

  getAllPublishers(){
    return this.http
      .get<{[key: string]: FullPublisherModel}>(
        'http://localhost:8080/publishers/get-all')
      .pipe(
        map((responseData) => {
          const postArray: FullPublisherModel[] = [];
          for (const key in responseData){
            if (responseData.hasOwnProperty(key)){
              postArray.push({...responseData[key], id: key})
            }
          }
          this.publishers = postArray;
          return postArray;
        })
      );
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
    return this.publishers.filter(obj => {
      return obj.topic === topic;
    });
    // console.log('topic: '+ topic);
    // console.log(this.publishers);
  }
}
