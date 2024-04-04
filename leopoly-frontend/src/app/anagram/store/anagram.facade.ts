import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { anagramsRequested } from './anagram.actions';
import { selectFindings } from './anagram.types';

@Injectable()
export class AnagramFacade {
  findings$ = this.store.select(selectFindings);

  constructor(private readonly store: Store) {}

  getAnagrams(word: string) {
    this.store.dispatch(anagramsRequested({ word }));
  }
}
