import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { InputModule } from '../input/input.module';
import { AnagramComponent } from './anagram.component';
import { AnagramService } from './services/anagram.service';
import { anagramReducer } from './store/anagram.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnagramEffects } from './store/anagram.effects';
import { AnagramFacade } from './store/anagram.facade';
import { AnagramKey } from './store/anagram.types';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: AnagramComponent,
  },
];

@NgModule({
  declarations: [AnagramComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(AnagramKey, anagramReducer),
    EffectsModule.forFeature([AnagramEffects]),
    InputModule,
    TranslateModule,
  ],
  providers: [AnagramService, AnagramFacade],
  bootstrap: [],
})
export class AnagramModule {}
