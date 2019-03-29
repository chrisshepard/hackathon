import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesViewComponent } from './resources-view/resources-view.component';
import { ResourceListComponent, DialogPopUpComponent } from './resource-list/resource-list.component';
import { MaterialModule } from "src/app/shared/material.module";

@NgModule({
  declarations: [ResourcesViewComponent, ResourceListComponent, DialogPopUpComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    MaterialModule
  ],
  entryComponents: [DialogPopUpComponent]
})
export class ResourcesModule { }
