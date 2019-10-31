import {NgModule} from '@angular/core';

import {
  MatBadgeModule,
  MatButtonModule, MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter';


@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
})
export class MaterialModule {
}
