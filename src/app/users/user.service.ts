import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./create-user.model";
import {Subject} from "rxjs";
import {HttpBody} from "../shared/http.response.model";

@Injectable()
export class UserService {
  currentError = new Subject<string>()
  user: User;
  existedEmailMessage: any = '';


  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    const errors = {errors: []}
    this.http.post<User>
    ('http://localhost:8080/users/create',user)
      .subscribe(responseData=>{
        console.log(responseData);
      }, error => {
        console.log('error body ==> ' + JSON.stringify(error));
        let obj: HttpBody = JSON.parse(JSON.stringify(error));
        console.log('errors ==> ' + obj.error.errors.at(0));
          this.existedEmailMessage = obj.error.errors.at(0);
        this.currentError.next(error.message);
        console.error('error body ' + error.body);
      });
  }

}
