import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationViewComponent } from './documentation-view/documentation-view.component';
import { DocumentationListComponent } from './documentation-list/documentation-list.component';
import { MaterialModule } from "src/app/shared/material.module";

@NgModule({
  declarations: [DocumentationViewComponent, DocumentationListComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    MaterialModule
  ]
})
export class DocumentationModule { }
