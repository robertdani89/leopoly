import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { wordChainRequested } from './word-chain.actions';
import { selectChain, selectError } from './word-chain.types';

@Injectable()
export class WordChainFacade {
  chain$ = this.store.select(selectChain);
  error$ = this.store.select(selectError);

  constructor(private readonly store: Store) {}

  getWordChain(source: string, target: string) {
    this.store.dispatch(wordChainRequested({ source, target }));
  }
}
