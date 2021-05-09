import React from 'react';
import styled, { keyframes } from 'styled-components';
import { reactLogo } from 'images';

const App = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`;

const Link = styled.a`
  color: #61dafb;
`;

export const ReactIntro = () => (
  <App>
    <AppHeader>
      <AppLogo src={reactLogo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </AppHeader>
  </App>
);
