import { combineReducers } from 'redux';
import { sampleReducer, sampleReducerRoot } from './sample';
import type { SampleState } from './sample';

export type RootState = {
  sample: SampleState;
};

export const rootReducer = combineReducers({
  [sampleReducerRoot]: sampleReducer,
  // add all key-value reducers
});
