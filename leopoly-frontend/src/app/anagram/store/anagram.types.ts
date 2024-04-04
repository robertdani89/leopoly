import { createFeatureSelector, createSelector } from '@ngrx/store';

export const AnagramKey = 'anagram';

export type AnagramState = {
  findings?: string[];
};

export interface AnagramResponseDTO {
  findings: string[];
}

export const select = (state: AnagramState) => state.findings;

export const selectAnagramState =
  createFeatureSelector<AnagramState>(AnagramKey);

export const selectFindings = createSelector(
  selectAnagramState,
  (s) => s.findings
);
