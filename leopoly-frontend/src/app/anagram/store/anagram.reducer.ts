import { createReducer, on } from '@ngrx/store';
import { anagramsRequestFinished } from './anagram.actions';
import { AnagramResponseDTO, AnagramState } from './anagram.types';
import { merge } from 'lodash';

function onAnagramsRequestFinished(
  state: AnagramState,
  res: AnagramResponseDTO
) {
  return merge(state, res);
}

export const initialState: AnagramState = {
  findings: [],
};

export const anagramReducer = createReducer(
  initialState,
  on(anagramsRequestFinished, onAnagramsRequestFinished)
);
