import {Component, OnInit, ViewChild} from '@angular/core';
import {FullPublisherModel} from "../../../../publishers/full-publisher.model";
import {PublisherService} from "../../../../publishers/publisher.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddPublisherComponent} from "./add-publisher/add-publisher.component";
import {ModalDirective} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.css']
})
export class PublishersListComponent implements OnInit{
  publishers: FullPublisherModel[];
  @ViewChild('myModal') myModal: ModalDirective;

  //pagination:
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];

  constructor(private publisherService: PublisherService,
              private router: Router,
              public dialog: MatDialog) {
  }


  openModal() {
    this.myModal.show();
  }

  closeModal() {
    this.myModal.hide();
  }

  // openModal() {
    // const dialogRef = this.dialog.open(ModalAddPublisherComponent);
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    // this.dialog.open(ModalAddPublisherComponent);
    // this.router.navigate(['/dashboard/add-new-publisher']);
  // }

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
        this.publishers = response as FullPublisherModel[];
      }
    )
  }

  ngOnInit() {
    this.publisherService.getAllPublishers().subscribe(
      data => {
        this.publishers = data as FullPublisherModel[];
      }
    );
  }

  editItem(id: string){
    // this.router.navigate(['edit/publisher/id:']);
    this.publisherService.editPublisher(+id);
    console.log('edit item', id);
  }

  deleteItem(id: string, isActive: string){
    if (isActive === 'true'){
      this.deactivatePublisher(+id);
      console.log('deactivate item', id);
    } else if(isActive === 'false'){
      this.activatePublisher(+id);
      console.log('activate item', id);
    }
  }

  deactivatePublisher(id: number){
    this.publisherService.deactivatePublisher(id)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
      );
  }

  activatePublisher(id: number){
    this.publisherService.activatePublisher(id)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
      );
  }

}
