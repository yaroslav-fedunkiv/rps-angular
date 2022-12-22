import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./create-user.model";
import {Subject} from "rxjs";

@Injectable()
export class UserService{
  error = new Subject<string>()
  user: User;

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    this.http.post<User>
    ('http://localhost:8080/users/create',user)
      .subscribe(responseData=>{
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
        console.log(this.error)
      });
  }
}
