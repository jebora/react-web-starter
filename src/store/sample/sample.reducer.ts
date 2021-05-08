import type { Reducer, AnyAction } from 'redux';
import { actions } from './sample.actions';
import type { Field } from './sample.types';

export type SampleState = {
  [id: string]: Field;
};

const initialState: SampleState = {};

export const sampleReducerRoot = 'sample';

export const sampleReducer: Reducer<SampleState, AnyAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actions.setField:
      return {
        ...state,
        ...action.payload,
      };
    case actions.reset:
      return {};
    default:
      return state;
  }
};
