import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GitserviceService } from '../gitservice.service';
import { Repo } from '../repo';
import { User } from '../user';

const routes: Routes = [
  {path:"User", component:User},
  {path: "Repo", component:Repo}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
