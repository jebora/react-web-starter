import { createSelector } from 'reselect';
import { sampleReducerRoot } from './sample.reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type State = { [x: string]: any };

export const selectSample = (state: State) => state[sampleReducerRoot];

const selectFieldKey = (_: State, key: string) => key;

export const selectField = createSelector(
  selectSample,
  selectFieldKey,
  (state, key) => state[key],
);
