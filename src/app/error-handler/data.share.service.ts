import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataShareService{
  constructor() {
  }

  serverErrorsSubject = new BehaviorSubject(null);
  public serverError$ = this.serverErrorsSubject.asObservable();

  addServerErrors(errors: any){
    this.serverErrorsSubject.next(errors);
  }
  removeServerErrors(){
    this.serverErrorsSubject.next(null);
  }
}
