import { Pipe, PipeTransform } from '@angular/core';
import {FullPublisherModel} from "../publishers/full-publisher.model";

@Pipe({
  name: 'filterByTopic'
})
export class FilterByTopicPipe implements PipeTransform {

  transform(value: FullPublisherModel[], topic: string): any {
    if (value !== undefined) {
      if (value.length === 0 || topic === ''){
        return value;
      }
      return value.filter(obj => {
        return obj.topic === topic;
      });
    }
  }

}
