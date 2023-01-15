import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PublishersComponent} from "./publishers/publishers.component";
import {RegistrationComponent} from "./admin/registration/registration.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {
  AddPublisherComponent
} from "./admin/dashboard/publishers/publishers-list/add-publisher/add-publisher.component";
import {PublishersListComponent} from "./admin/dashboard/publishers/publishers-list/publishers-list.component";
import {
  EditPublisherComponent
} from "./admin/dashboard/publishers/publishers-list/edit-publisher/edit-publisher.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/periodicals', pathMatch: 'full'},
  {path: 'periodicals', component: PublishersComponent},
  {path: 'sign-up', component: RegistrationComponent},
  {path: 'admin/dashboard', component: DashboardComponent, children: [
      {path: 'publishers', component: PublishersListComponent},
      {path: 'publishers/add/new', component: AddPublisherComponent},
      {path: 'publishers/edit/:id', component: EditPublisherComponent}
    ]},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
