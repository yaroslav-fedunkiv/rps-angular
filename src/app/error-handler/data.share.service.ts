import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataShareService{
  statusCode = 0;
  constructor() {
  }

  serverErrorsSubject = new BehaviorSubject(null);
  public serverError$ = this.serverErrorsSubject.asObservable();

  addServerErrors(errors: any){
    // this.statusCode = 400;
    this.serverErrorsSubject.next(errors);
  }
  removeServerErrors(){
    this.serverErrorsSubject.next(null);
  }
}
