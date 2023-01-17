import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "./create-user.model";
import {Observable, Subject, throwError} from "rxjs";
import {HttpBody} from "../shared/http.response.model";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Injectable()
export class UserService {
  currentError = new Subject<string>()
  user: User;
  existedEmailMessage: any = '';


  constructor(private http: HttpClient,
              private router: Router) {
  }

  addUser(user: User): Observable<HttpErrorResponse> {
    // const errors = {errors: []}
    return this.http.post<HttpErrorResponse>
    ('http://localhost:8080/users/create',user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('error inside addUser(user: User): ' + error)
          return throwError(error);
        }));
      // .subscribe(responseData=>{
      //   console.log(responseData);
      //   // this.router.navigate(['periodicals']);
      // }, error => {
      //   console.log('error body ==> ' + JSON.stringify(error));
      //   let obj: HttpBody = JSON.parse(JSON.stringify(error));
      //   console.log('errors ==> ' + obj.error.errors.at(0));
      //     this.existedEmailMessage = obj.error.errors.at(0);
      //   this.currentError.next(error.message);
      //   console.error('error body ' + error.body);
      // });
  }

}
