import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule
  ],
  declarations: [
  ],
})
export class CustomersModule { }
