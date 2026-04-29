import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders heading with name', () => {
    render(<Header />);
    expect(screen.getByText(/Diego Cortés/)).toBeInTheDocument();
  });
});
