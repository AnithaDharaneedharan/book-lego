import React from 'react';
import Books from '../components/Books';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);
const { getByTestId, asFragment } = render(
  <Books
    title={'Learning Object-Oriented Programming'}
    location={'books/RM_Books/packtpub/'}
    cover={'9781785289637.jpg'}
  />
);

test('render the books', () => {
  expect(getByTestId('title')).toHaveTextContent(
    'Learning Object-Oriented Programming'
  );
});

test('should render snapshot', () => {
  expect(asFragment()).toMatchSnapshot();
});
