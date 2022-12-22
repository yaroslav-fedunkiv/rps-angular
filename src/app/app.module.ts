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
import {HttpClientModule} from "@angular/common/http";
import { FilterByTopicPipe } from './publishers/filter-by-topic.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from "./app-routing.module";
import { RegistrationComponent } from './admin/registration/registration.component';
import { AuthComponent } from './admin/auth/auth.component';
import {UserService} from "./users/user.service";
import {ConfirmPasswordValidators} from "./shared/confirm-password.directive";
import {HttpBody} from "./shared/http.response.model";
// import {ConfirmPasswordDirective} from "./shared/confirm-password.directive";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    PublishersComponent,
    PublisherListComponent,
    PublisherItemComponent,
    FilterByTopicPipe,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [PublisherService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
