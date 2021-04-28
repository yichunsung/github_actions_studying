import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/2021-04-29/i);
  expect(linkElement).toBeInTheDocument();
});
