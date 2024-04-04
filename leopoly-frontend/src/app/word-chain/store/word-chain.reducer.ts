import { createReducer, on } from '@ngrx/store';
import { clone } from 'lodash';
import {
  wordChainRequestFailed,
  wordChainRequestFinished,
} from './word-chain.actions';
import { WordChainState } from './word-chain.types';

function onWordChainRequestFinished(
  state: WordChainState,
  { chain }: { chain: string[] }
) {
  const cloned = clone(state);
  return Object.assign(cloned, { chain });
}

function onWordChainRequestFailed(
  state: WordChainState,
  { error }: { error: any }
) {
  const cloned = clone(state);
  return Object.assign(cloned, { chain: undefined, error: true });
}

export const initialState: WordChainState = {
  chain: undefined,
  error: undefined,
};

export const wordChainReducer = createReducer(
  initialState,
  on(wordChainRequestFinished, onWordChainRequestFinished),
  on(wordChainRequestFailed, onWordChainRequestFailed)
);
