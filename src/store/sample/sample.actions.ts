import type { Field } from './sample.types';

export const actions = {
  setField: 'RWS::SAMPLE::SET_FIELD',
  reset: 'RWS::SAMPLE::RESET',
};

export const setField = (key: string, field: Field) => ({
  type: actions.setField,
  payload: { [key]: field },
});

export const reset = () => ({ type: actions.reset });
