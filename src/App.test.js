import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders a page heading', () => {
  render(<App />);

  const headerText = screen.getByText('Accessible Listbox Components');
  expect(headerText).toBeInTheDocument();
});
