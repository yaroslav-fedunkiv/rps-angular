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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    PublishersComponent,
    PublisherListComponent,
    PublisherItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PublisherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
