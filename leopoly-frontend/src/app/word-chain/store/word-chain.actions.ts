import { createAction, props } from '@ngrx/store';

export const wordChainRequested = createAction(
  '[WordChain] wordChain requested',
  props<{ source: string; target: string }>()
);
export const wordChainRequestFinished = createAction(
  '[WordChain] wordChain request finished',
  props<{ chain: string[] }>()
);

export const wordChainRequestFailed = createAction(
  '[WordChain] wordChain request failed',
  props<{ error: any }>()
);
