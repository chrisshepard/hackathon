import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesViewComponent } from "src/app/resources/resources-view/resources-view.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ResourcesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
