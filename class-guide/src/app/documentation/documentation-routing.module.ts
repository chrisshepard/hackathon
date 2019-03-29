import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationViewComponent } from "src/app/documentation/documentation-view/documentation-view.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DocumentationViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
