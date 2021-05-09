import type { Field } from './sample.types';

export const actions = {
  setField: 'RWS::SAMPLE::SET_FIELD',
  reset: 'RWS::SAMPLE::RESET',
};

export const setField = (key: string, field: Field) => ({
  type: actions.setField,
  payload: { [key]: field },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reset = (payload: any = {}) => ({
  type: actions.reset,
  payload,
});
