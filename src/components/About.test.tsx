import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About', () => {
  it('renders the class definition', () => {
    render(<About />);
    expect(screen.getByText('DiegoCortes')).toBeInTheDocument();
  });
});
