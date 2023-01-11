import {Injectable} from "@angular/core";
import {map, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FullPublisherModel} from "./full-publisher.model";

@Injectable()
export class PublisherService{
  publisherChanged = new Subject<FullPublisherModel[]>();
  publishers: FullPublisherModel[];
  publishersByTopic: FullPublisherModel[];
  currentTopic = '';

  constructor(private http: HttpClient) {}

  getPublishers(){
    return this.publishers.slice();
  }

  // getRecipe(index: number){
  //   return this.publishers[index];
  // }

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

  deactivatePublisher(id: number) {
    const publishers = this.getPublishers();
    if (publishers) {
      const publisher = publishers.at(id);
      if (publisher) {
        publisher.isActive = 'false';
      }
    }

    return this.http.delete(`http://localhost:8080/publishers/deactivate/${id}`, {})





      // .subscribe(()=>{
      //   this.getAllPublishers();
      //   }
      //   // this.http.get<FullPublisherModel>(`http://localhost:8080/publishers/get/by/${id}`)
      //   //   .subscribe((publisher) => {
      //   //       // this.publishers.at(id)?.isActive = publisher.isActive;
      //   //   })
      // );
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
