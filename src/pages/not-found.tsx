import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from './page';

const Container = styled.div``;

const Header = styled.h3``;

const Message = styled.span``;

const Content = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>{"We couldn't find what you were looking for."}</Header>
      <Message>
        No match for <code>{location.pathname}</code>
      </Message>
    </Container>
  );
};

export const NotFound = () => {
  return <Page title="Page Not Found" content={<Content />} />;
};
