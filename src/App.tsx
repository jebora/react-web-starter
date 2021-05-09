import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './store';
import logo from './logo.svg';
import './App.css';

const { store } = configureStore();

const AppView = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export const App = () => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <AppView />
    </ConnectedRouter>
  </ReduxProvider>
);
