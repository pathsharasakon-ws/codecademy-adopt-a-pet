import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getPets, getPetTypes } from './api/petfinder';

jest.mock('./api/petfinder', () => ({
  getPets: jest.fn(),
  getPetTypes: jest.fn()
}));

beforeEach(() => {
  getPets.mockResolvedValue([]);
  getPetTypes.mockResolvedValue({ types: [] });
});

test('renders the adoption home page', async () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'All Pets' })).toBeInTheDocument();
  expect(await screen.findByText('Find your perfect pet')).toBeInTheDocument();
});

test('shows an error when pets cannot be loaded', async () => {
  getPets.mockRejectedValue(new Error('Network error'));
  render(<App />);
  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Unable to load pets'));
});
