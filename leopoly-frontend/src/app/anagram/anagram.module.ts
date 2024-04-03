import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './anagram.component';
import { AnagramService } from './services/anagram.service';

const routes: Routes = [
  {
    path: '',
    component: AnagramComponent,
  },
];

@NgModule({
  declarations: [AnagramComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [AnagramService],
  bootstrap: [],
})
export class AnagramModule {}
