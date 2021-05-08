import type { Field } from './sample.types';

export const actions = {
  setField: 'rws::sample::setField',
  reset: 'rws::sample::reset',
};

export const setField = (key: string, field: Field) => ({
  type: actions.setField,
  payload: { [key]: field },
});

export const reset = () => ({ type: actions.reset });
