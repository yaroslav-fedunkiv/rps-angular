import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import { PublishersComponent } from './publishers/publishers.component';
import { PublisherListComponent } from './publishers/publisher-list/publisher-list.component';
import { PublisherItemComponent } from './publishers/publisher-list/publisher-item/publisher-item.component';
import {PublisherService} from "./publishers/publisher.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FilterByTopicPipe } from './publishers/filter-by-topic.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from "./app-routing.module";
import { RegistrationComponent } from './admin/registration/registration.component';
// import { AuthComponent } from './admin/auth/auth.component';
import {UserService} from "./users/user.service";
import {ConfirmPasswordValidators} from "./shared/confirm-password.directive";
import {HttpBody} from "./shared/http.response.model";
import {HandleErrorsInterceptor} from "./error-handler/handle.errors.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {PublishersListComponent} from "./admin/dashboard/publishers/publisher-list/publishers-list.component";
// import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import {PublishersListComponent} from "./admin/dashboard/publishers/publisher-list/publishers-list.component";
// import {
//   PublishersItemComponent
// } from "./admin/dashboard/publishers/publisher-list/publisher-item/publishers-item.component";
// import {ConfirmPasswordDirective} from "./shared/confirm-password.directive";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    PublishersComponent,
    PublisherListComponent,
    PublishersListComponent,
    PublisherItemComponent,
    FilterByTopicPipe,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: "toaster-bottom-left"
    })
  ],
  providers: [PublisherService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HandleErrorsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
