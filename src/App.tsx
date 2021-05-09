import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './store';
import { Root } from './root';

const { store } = configureStore();

export const App = () => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </ReduxProvider>
);
