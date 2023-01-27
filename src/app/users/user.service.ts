import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "./create-user.model";
import {Observable, Subject, throwError} from "rxjs";
import {Router} from "@angular/router";
import {catchError, map} from "rxjs/operators";
import {FullUserModel} from "./full-user.model";

@Injectable()
export class UserService{
  currentError = new Subject<string>()
  user: User;
  fullUserModel: FullUserModel[];
  existedEmailMessage: any = '';


  constructor(private http: HttpClient,
              private router: Router) {
  }

  getAllUsers(){
    return this.http.get<FullUserModel[]>('http://localhost:8080/users/get-all')
      .pipe(map(publishers=> {
        this.fullUserModel = publishers.slice(); // make a copy of the array
        return this.fullUserModel;
      }));
  }

  addUser(user: User): Observable<HttpErrorResponse> {
    return this.http.post<HttpErrorResponse>
    ('http://localhost:8080/users/create',user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('error inside addUser(user: User): ' + error)
          return throwError(error);
        }));
  }

  deactivatePublisher(id: number){
    const publishers = this.fullUserModel;
    if (publishers) {
      const publisher = publishers.at(id-1);
      if (publisher) {
        publisher.isActive = 'false';
      }
    }
    return this.http.delete(`http://localhost:8080/users/deactivate/${id}`, {});
  }

  activatePublisher(id: number){
    const publishers = this.fullUserModel;
    if (publishers) {
      const publisher = publishers.at(id-1);
      if (publisher) {
        publisher.isActive = 'true';
      }
    }
    return this.http.delete(`http://localhost:8080/users/activate/${id}`, {});
  }

  login(email: string, password: string) {
    this.http.get(`http://localhost:8080/login?email=${email}&password=${password}`,
      {observe: 'response' }).subscribe(resp =>{
      console.log(resp.headers.keys());
    })

  }
}
