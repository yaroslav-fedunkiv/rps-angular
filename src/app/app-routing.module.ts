import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PublishersComponent} from "./publishers/publishers.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/publishers', pathMatch: 'full'},
  {path: 'publishers', component: PublishersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
