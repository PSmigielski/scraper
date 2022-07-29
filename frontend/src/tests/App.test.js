import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/organisms/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
