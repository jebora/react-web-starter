import React from 'react';
import styled from 'styled-components';
import { Page } from 'layouts/page';
import type { Book } from './types';
import { useBookSearch } from './use-book-search.hook';

const SearchInput = styled.input`
  height: 20px;
  min-width: 400px;
  width: 30vw;
  margin: 20px 0px;
  padding: 10px 10px;
  border: 1px solid #bfbdbb;
  border-radius: 5px;
  font-size: 16px;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px 30px;
  margin: 5px;
  border: 1px solid #e6e4e3;
  border-radius: 5px;
  z-index: 3;
`;

const Title = styled.span`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Detail = styled.span`
  font-size: 16px;
  line-height: 1.5;
`;

const List = styled.ul`
  display: flex;
  align-items: flex-start;
  padding: 0;
  list-style-type: none;
  flex-wrap: wrap;
`;

const FoundBook = ({ title, authors, year, subject }: Book) => (
  <Card>
    <Title>{title}</Title>
    <Detail>{`Year: ${year}`}</Detail>
    {!!authors.length && <Detail>{`Authors: ${authors.join(', ')}`}</Detail>}
    {subject && <Detail>{`Subject: ${subject}`}</Detail>}
  </Card>
);

const SearchContent = () => {
  const { query, books, onQueryChange, loading } = useBookSearch();
  return (
    <>
      <SearchInput
        type="text"
        placeholder="Search book..."
        onChange={(event) => onQueryChange(event.target.value)}
      />
      {!loading && query && !books.length && <p>No books found!</p>}
      <List>
        {books.map((book: Book) => (
          <FoundBook key={book.id} {...book} />
        ))}
      </List>
    </>
  );
};

export const BookSearch = () => (
  <Page title="Book Search" content={<SearchContent />} />
);
