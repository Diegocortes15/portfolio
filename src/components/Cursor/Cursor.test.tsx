import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Cursor from './Cursor';

describe('Cursor', () => {
  it('renders without crashing', () => {
    render(<Cursor />);
  });
});
