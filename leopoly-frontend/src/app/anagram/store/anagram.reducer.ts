import { createReducer, on } from '@ngrx/store';
import { anagramsRequestFinished } from './anagram.actions';
import { AnagramState } from './anagram.types';
import { clone } from 'lodash';

function onAnagramsRequestFinished(
  state: AnagramState,
  { findings }: { findings: string[] }
) {
  const cloned = clone(state);
  return Object.assign(cloned, { findings });
}

export const initialState: AnagramState = {
  findings: undefined,
};

export const anagramReducer = createReducer(
  initialState,
  on(anagramsRequestFinished, onAnagramsRequestFinished)
);
