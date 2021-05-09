import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
`;

const Title = styled.h1`
  margin: 50px 0px 30px;
`;

const Content = styled.div``;

type PageProps = {
  title: string;
  content: ReactNode;
};

export const Page = ({ title, content }: PageProps) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Container>
);
