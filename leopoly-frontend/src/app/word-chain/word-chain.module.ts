import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordChainComponent } from './word-chain.component';

const routes: Routes = [
  {
    path: '',
    component: WordChainComponent,
  },
];

@NgModule({
  declarations: [WordChainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [],
})
export class WordChainModule {}
