import { createFeatureSelector, createSelector } from '@ngrx/store';

export const WordChainKey = 'word-chain';

export type WordChainState = {
  chain?: string[];
  error?: boolean;
};

export interface WordChainResponseDTO {
  chain: string[];
}

export const select = (state: WordChainState) => state.chain;

export const selectWordChainState =
  createFeatureSelector<WordChainState>(WordChainKey);

export const selectChain = createSelector(selectWordChainState, (s) => s.chain);
export const selectError = createSelector(selectWordChainState, (s) => s.error);
