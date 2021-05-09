import React from 'react';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { Page } from './page';

const Text = styled.p``;

type TopicParam = {
  fruit: string;
};

const Topic = () => {
  const { fruit } = useParams<TopicParam>();

  return <Text>{fruit}</Text>;
};

const TopicList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const TopicItem = styled.li`
  textalign: center;
  list-style-type: none;
  padding: 10px;
  white-space: nowrap;
`;

const Container = styled.div``;

const Header = styled.h3``;

const Content = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <TopicList>
        <TopicItem>
          <Link to={`${url}/apples`}>Apples</Link>
        </TopicItem>
        <TopicItem>
          <Link to={`${url}/bananas`}>Bananas</Link>
        </TopicItem>
        <TopicItem>
          <Link to={`${url}/watermelon`}>Watermelon</Link>
        </TopicItem>
      </TopicList>
      <Switch>
        <Route exact path={path}>
          <Header>Please select a topic</Header>
        </Route>
        <Route path={`${path}/:fruit`} component={Topic} />
      </Switch>
    </Container>
  );
};

export const Topics = () => <Page title="Topics" content={<Content />} />;
