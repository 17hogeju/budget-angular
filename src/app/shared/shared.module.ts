import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { SnackBarComponent } from './components/snackbar/snackbar.component';
import { PeriodSelectorComponent } from './components/period-selector/period-selector.component';
import { ExpenseCategoryApi } from './api/expenseCategory.api';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule
  ],
  declarations: [
    PeriodSelectorComponent,
    SnackBarComponent
  ],
  exports: [
    CommonModule,
    PeriodSelectorComponent,
    SnackBarComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [ExpenseCategoryApi],
  entryComponents: [SnackBarComponent]
})
export class SharedModule { }
