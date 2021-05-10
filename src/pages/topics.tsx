import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { reset, selectField, selectSample } from 'store/sample';
import { Page } from 'layouts/page';
import FRUITS from './fixtures/fruits.json';

const Container = styled.div``;

const Text = styled.p`
  font-weight: bold;
`;

const Description = styled.span``;

type TopicParam = {
  fruit: string;
};

const Topic = () => {
  const { fruit } = useParams<TopicParam>();
  const description = useSelector((state) => selectField(state, fruit));

  return (
    <Container>
      <Text>{fruit}</Text>
      <Description>{description}</Description>
    </Container>
  );
};

const TopicList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const TopicItem = styled.li`
  list-style-type: none;
  padding: 10px;
  white-space: nowrap;
`;

const Header = styled.h3``;

const Content = () => {
  const sample = useSelector(selectSample);
  const { path, url } = useRouteMatch();

  const topics: string[] = Object.keys(sample);

  return (
    <Container>
      <Header>Please select a topic:</Header>
      <TopicList>
        {topics.map((topic) => (
          <TopicItem key={topic}>
            <Link to={`${url}/${topic}`}>{topic}</Link>
          </TopicItem>
        ))}
      </TopicList>
      <Switch>
        <Route exact path={path}>
          <p>Do you like fruits?</p>
        </Route>
        <Route path={`${path}/:fruit`} component={Topic} />
      </Switch>
    </Container>
  );
};

export const Topics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset(FRUITS));
  }, [dispatch]);

  return <Page title="Topics" content={<Content />} />;
};
