import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReactIntro } from './react-intro';

test('renders learn react link', () => {
  render(<ReactIntro />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
