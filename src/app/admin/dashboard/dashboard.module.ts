import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import { ModalAddPublisherComponent } from './publishers/publishers-list/modal-add-publisher/modal-add-publisher.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule
  ],
  declarations: [
    ModalAddPublisherComponent
  ],
  // declarations: [DashboardComponent]
})
export class CustomersModule { }
