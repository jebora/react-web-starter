import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer, defaultState } from './root-reducer';
import type { RootState } from './root-reducer';

export const history = createBrowserHistory();

const middleware = [thunkMiddleware, routerMiddleware(history)];
const enhancers = composeWithDevTools(applyMiddleware(...middleware));

let store: Store;

export const configureStore = (initialState: RootState = defaultState) => {
  store = createStore(rootReducer(history), initialState, enhancers);
  return { store };
};

export function getStore(): Store {
  return store;
}
