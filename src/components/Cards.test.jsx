import { render, screen, waitFor } from '@testing-library/react';
import { Cards } from './Cards';
import { vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('Cards Component', () => {
  test('handles API errors', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    render(<Cards onSelectPokemon={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText('Error fetching Pokémon data.')).toBeInTheDocument();
    });
  });
});