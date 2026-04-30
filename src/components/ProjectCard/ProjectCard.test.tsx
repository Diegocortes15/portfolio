import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from './ProjectCard';
import type { Project } from '../../data/projects';

const mockProject: Project = {
  id: 0,
  title: 'Test\nProject',
  category: 'automation',
  frameworkIcon: '/images/selenium-logo.png',
  screenshot: '/images/saucelabs.jpg',
  url: 'https://example.com',
  type: 'web',
  width: '33',
};

describe('ProjectCard', () => {
  it('renders the project index', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('00')).toBeInTheDocument();
  });
});
