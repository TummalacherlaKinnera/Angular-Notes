import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { InbuiltdirectivesComponent } from './inbuiltdirectives/inbuiltdirectives.component';
import { Server1Component } from './PropertyAndEventBindingExamples/server1.component';
import { ServerComponent } from './server/server.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  {path:'',component:ServerComponent},
  {path:'server',component:ServerComponent},
  {path:'server1',component:Server1Component},
  {path:'two-way-data-binding',component:TwoWayDataBindingComponent},
  {path:'assignment2',component:Assignment2Component},
  {path:'inbuiltdirectives',component:InbuiltdirectivesComponent},
  {path:'assignment3',component:Assignment3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
