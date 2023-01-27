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
import { FilterByTopicPipe } from './pipes/filter-by-topic.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from "./app-routing.module";
import { RegistrationComponent } from './admin/auth/registration/registration.component';
import {UserService} from "./users/user.service";
import {HandleErrorsInterceptor} from "./error-handler/handle.errors.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {PublishersListComponent} from "./admin/dashboard/publishers/publishers-list/publishers-list.component";
import {MatDialogModule} from "@angular/material/dialog";
import {
  AddPublisherComponent
} from "./admin/dashboard/publishers/publishers-list/add-publisher/add-publisher.component";
import {
  EditPublisherComponent
} from "./admin/dashboard/publishers/publishers-list/edit-publisher/edit-publisher.component";
import {AddNewIssueComponent} from "./admin/dashboard/publishers/publishers-list/add-new-issue/add-new-issue.component";
import { UsersListComponent } from './admin/dashboard/users/users-list/users-list.component';
import {FilterPipe} from "./pipes/filter.pipe";
import { LogInComponent } from './admin/auth/log-in/log-in.component';


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
    DashboardComponent,
    AddPublisherComponent,
    EditPublisherComponent,
    AddNewIssueComponent,
    UsersListComponent,
    FilterPipe,
    LogInComponent
  ],
  imports: [
    MatDialogModule,
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
