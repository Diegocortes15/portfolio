import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Work from './Work';

describe('Work', () => {
  it('renders section heading', () => {
    render(<Work />);
    expect(screen.getByText(/Selected Web/)).toBeInTheDocument();
  });
});
