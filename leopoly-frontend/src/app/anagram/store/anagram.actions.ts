import { createAction, props } from '@ngrx/store';

export const anagramsRequested = createAction(
  '[Anagram] anagrams requested',
  props<{ word: string }>()
);
export const anagramsRequestFinished = createAction(
  '[Anagram] anagrams request finished',
  props<{ findings: string[] }>()
);

export const anagramsRequestFailed = createAction(
  '[Anagram] anagrams request failed',
  props<{ error: any }>()
);
