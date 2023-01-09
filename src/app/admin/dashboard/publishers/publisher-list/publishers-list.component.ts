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
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];

  constructor(private publisherService: PublisherService) {
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrievePublishers();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrievePublishers();
  }
  retrievePublishers():void{
    this.publisherService.getAllPublishers().subscribe((response) =>{
        this.publishers = response;
      }
    )
  }

  ngOnInit() {
    this.publisherService.getAllPublishers().subscribe(
      data => {
        this.publishers = data;
      }
    );
  }

  editItem(id: string){
    console.log('edit item', id)
  }

  deleteItem(id: string){
    console.log('delete item', id)
  }

}
