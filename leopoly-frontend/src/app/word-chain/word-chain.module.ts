import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { AlertDialogModule } from '../alert-dialog/alert-dialog.module';
import { DoubleInputModule } from '../double-input/double-input.module';
import { WordChainService } from './services/word-chain.service';
import { WordChainEffects } from './store/word-chain.effects';
import { WordChainFacade } from './store/word-chain.facade';
import { wordChainReducer } from './store/word-chain.reducer';
import { WordChainKey } from './store/word-chain.types';
import { WordChainComponent } from './word-chain.component';

const routes: Routes = [
  {
    path: '',
    component: WordChainComponent,
  },
];

@NgModule({
  declarations: [WordChainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(WordChainKey, wordChainReducer),
    EffectsModule.forFeature([WordChainEffects]),
    TranslateModule,
    DoubleInputModule,
    AlertDialogModule,
    MatDialogModule,
  ],
  providers: [WordChainFacade, WordChainService],
  bootstrap: [],
})
export class WordChainModule {}
