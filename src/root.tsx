import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationBar } from 'components';
import { Home, About, NotFound, ReactIntro } from 'pages';

const Container = styled.div``;

const Pages = {
  home: { label: 'Home', path: '/' },
  about: { label: 'About', path: '/about' },
  reactIntro: { label: 'React Intro', path: '/react-intro' },
};

const links = [Pages.home, Pages.about, Pages.reactIntro];

export const Root = () => (
  <Container>
    <NavigationBar links={links} />
    <Switch>
      <Route exact path={Pages.home.path} component={Home} />
      <Route path={Pages.about.path} component={About} />
      <Route path={Pages.reactIntro.path} component={ReactIntro} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Container>
);
