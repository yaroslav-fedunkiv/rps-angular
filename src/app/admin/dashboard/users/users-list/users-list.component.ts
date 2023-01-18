import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../users/user.service";
import {FullUserModel} from "../../../../users/full-user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  users: FullUserModel[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      data=>{
        this.users = data;
      }
    )
  }

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
