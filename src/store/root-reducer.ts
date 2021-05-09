import { combineReducers } from 'redux';
import type { History } from 'history';
import { connectRouter } from 'connected-react-router';
import {
  sampleReducer,
  sampleReducerRoot,
  initialState as sampleInitialState,
} from './sample';
import type { SampleState } from './sample';

export const defaultState = {
  sample: sampleInitialState,
};

export type RootState = {
  sample: SampleState;
};

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [sampleReducerRoot]: sampleReducer,
    // add all key-value reducers
  });
