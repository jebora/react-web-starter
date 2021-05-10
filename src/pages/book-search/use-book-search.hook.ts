import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import type { Canceler } from 'axios';
import type { Book, BookSearchJSON, Doc } from './types';

const URL_OPEN_LIBRARY = 'http://openlibrary.org';
const PAGE_LIMIT = 30;
const QUERY_DEBOUNCE = 500;

const transformDocsBooks = (docs: Doc[]): Book[] =>
  docs.map((doc: Doc) => ({
    id: doc.key,
    title: doc.title,
    year: doc.first_publish_year,
    authors: doc.author_name || [],
    subject: doc.subject ? doc.subject[0] : '',
  }));

export const useBookSearch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [books, setBooks] = useState<Book[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [query, setQuery] = useState<string>('');

  const onQueryChange = debounce((newQuery: string) => {
    setQuery(newQuery);
    setPageNumber(1);
  }, QUERY_DEBOUNCE);

  useEffect(() => {
    if (!query && books.length) setBooks([]);
  }, [query, books]);

  useEffect(() => {
    if (!query) return;

    let cancel: Canceler | undefined;

    setLoading(true);
    setError(false);

    axios({
      method: 'GET',
      url: `${URL_OPEN_LIBRARY}/search.json`,
      params: { q: query, page: pageNumber, limit: PAGE_LIMIT },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        const { data }: { data: BookSearchJSON } = res;
        const foundBooks = transformDocsBooks(data.docs);

        setBooks(foundBooks);
        setHasMore(foundBooks.length < data.num_found);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });

    return () => cancel && cancel();
  }, [books, query, pageNumber]);

  return {
    query,
    loading,
    error,
    books,
    hasMore,
    onQueryChange,
  };
};
