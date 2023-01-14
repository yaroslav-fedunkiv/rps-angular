import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {DataShareService} from "./data.share.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HandleErrorService {

  constructor(private toaster: ToastrService,
              private dataShare: DataShareService) {
  }

  public handleError(err: HttpErrorResponse){
    let errorMessage: string;
    if (err.error instanceof ErrorEvent){
      errorMessage = `An error occurred : ${err.error.message}`;
    }else {
      switch (err.status){
        case 200:
          errorMessage = `${err.status}: ok!`
          break;
        case 401:
          errorMessage = `${err.status}: You are unauthorized to do this action.`;
          break;
        case 403:
          errorMessage = `${err.status}: You don't have permission to access the requested resource.`;
          break;
        case 404:
          errorMessage = `${err.status}: The requested resource does not exist.`;
          break;
        case 412:
          errorMessage = `${err.status}: Precondition failed.`;
          break;
        case 500:
          errorMessage = `${err.status}: Internal Server Error.`;
          break;
        case 503:
          errorMessage = `${err.status}: The request service is not available.`;
          break;
        case 400:
          errorMessage = `${err.status}: Validation Error!`;
          this.handleBackendValidations(err);
          break;
        default:
          errorMessage = `Something Went Wrong`;
      }
    }
    console.log(errorMessage);
  }

  public handleBackendValidations(error: HttpErrorResponse) {
    const errors: any = {};

    for (const key in error.error.errors){
      if (Object.prototype.hasOwnProperty.call(error.error.errors, key)){
        errors[key] = error.error.errors[key];
      }
      this.dataShare.addServerErrors(errors);
    }
  }
}
