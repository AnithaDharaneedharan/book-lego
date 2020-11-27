import App from '../App.js';
import React from 'react';
import * as ReactDOM from 'react-dom';

test('should render the heading with empty text', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);
  expect(root.querySelector('header').textContent).toBe('Book Lego');
  expect(root.querySelector('footer').textContent).toBe('all rights reserved');
});
