import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Preloader from './Preloader';

describe('Preloader', () => {
  it('renders without crashing', () => {
    render(<Preloader />);
  });
});
