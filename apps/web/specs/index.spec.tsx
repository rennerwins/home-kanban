import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should render header correctly', () => {
    render(<Index />);
    const heading = screen.getByRole('heading', {
      name: /welcome/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
