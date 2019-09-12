import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatPaginatorModule,
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
    MatToolbarModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
