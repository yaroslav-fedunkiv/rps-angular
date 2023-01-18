import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../users/user.service";
import {FullUserModel} from "../../../../users/full-user.model";
import {FullPublisherModel} from "../../../../publishers/full-publisher.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  users: FullUserModel[];

  //pagination:
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      data=>{
        this.users = data;
      }
    )
  }

  handlePageChange(event: number): void {
    this.page = event;
    // this.retrievePublishers();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    // this.retrievePublishers();
  }

  // retrievePublishers():void{
  //   this.userService.getAllUsers().subscribe((response) =>{
  //       this.users = response as FullUserModel[];
  //     }
  //   )
  // }

  deleteItem(id: string, isActive: string){
    if (isActive === 'true'){
      this.deactivateUser(+id);
      console.log('deactivate item', id);
    } else if(isActive === 'false'){
      this.activateUser(+id);
      console.log('activate item', id);
    }
  }

  deactivateUser(id: number){
    this.userService.deactivatePublisher(id)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
      );
  }

  activateUser(id: number){
    this.userService.activatePublisher(id)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
      );
  }
}
