import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../components/Search';

afterEach(cleanup);
const { getByTestId, asFragment } = render(<Search totalBooks={50} />);

test('render the search', () => {
  expect(getByTestId('totalBooks')).toHaveTextContent(50);
});

test('should render snapshot', () => {
  expect(asFragment()).toMatchSnapshot();
});
