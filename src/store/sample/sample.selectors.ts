import { createSelector } from 'reselect';
import { sampleReducerRoot } from './sample.reducer';
import type { RootState } from 'store/root-reducer';

const selectRoot = (state: RootState) => state[sampleReducerRoot];

const selectFieldKey = (state: RootState, key: string) => key;

export const selectField = createSelector(
  selectRoot,
  selectFieldKey,
  (state, key) => state[key],
);
