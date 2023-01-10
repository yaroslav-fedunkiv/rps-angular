import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PublishersComponent} from "./publishers/publishers.component";
import {RegistrationComponent} from "./admin/registration/registration.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/periodicals', pathMatch: 'full'},
  {path: 'periodicals', component: PublishersComponent},
  {path: 'sign-up', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
