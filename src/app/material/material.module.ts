import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatPaginatorModule, MatSidenavModule,
  MatSortModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
