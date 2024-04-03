import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class WelcomeModule {}
