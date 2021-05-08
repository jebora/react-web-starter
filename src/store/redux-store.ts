import { createStore, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './root-reducer';

const middleware = [thunkMiddleware];

const enhancers = applyMiddleware(...middleware);

let store: Store;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type State = { [id: string]: any };

export const configureStore = (initialState: State = {}) => {
  store = createStore(rootReducer, initialState, enhancers);
  return { store };
};

export function getStore(): Store {
  return store;
}
