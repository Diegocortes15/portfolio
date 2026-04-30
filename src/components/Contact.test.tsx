import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact', () => {
  it('renders LinkedIn link', () => {
    render(<Contact />);
    expect(screen.getByText('in/diegocortesroa/')).toBeInTheDocument();
  });
});
