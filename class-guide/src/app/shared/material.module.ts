import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule, 
    MatButtonModule,
    MatSidenavModule, 
    MatIconModule, 
    MatListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
