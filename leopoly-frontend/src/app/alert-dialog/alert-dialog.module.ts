import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AlertDialogComponent } from './alert-dialog.component';

@NgModule({
  declarations: [AlertDialogComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class AlertDialogModule {}
