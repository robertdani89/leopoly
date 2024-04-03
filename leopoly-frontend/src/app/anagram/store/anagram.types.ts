import { createSelector } from '@ngrx/store';

export type AnagramState = {
  findings: string[];
};

export interface AnagramResponseDTO {
  findings: string[];
}

export const selectFindings = (state: AnagramState) => state.findings;

const selectFindingsModel = createSelector(
  selectFindings,
  (findings) => findings
);
