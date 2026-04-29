import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders brand link', () => {
    render(<Navbar />);
    expect(screen.getByText('Diegocortes15')).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Start').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Work').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });
});
