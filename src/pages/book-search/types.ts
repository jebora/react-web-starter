export type Doc = {
  key: string;
  title: string;
  author_name: string[] | undefined;
  first_publish_year: string;
  subject: string[] | undefined;
};

export type BookSearchJSON = {
  num_found: number;
  start: number;
  docs: Doc[];
};

export type Book = {
  id: string;
  title: string;
  authors: string[];
  year: string;
  subject: string;
};
