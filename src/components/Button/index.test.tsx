import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, NavButton } from './index';

describe('Button', () => {
  it('renders the correct class variants', () => {
    const { rerender } = render(<Button />);
    expect(screen.getByTestId('button')).toHaveClass('button');
    expect(screen.getByTestId('button')).not.toHaveClass('button--small');

    rerender(<Button variant="small" />);
    expect(screen.getByTestId('button')).toHaveClass('button--small');
  });
});

describe('NavButton', () => {
  it('renders the correct class variants', () => {
    const { rerender } = render(<NavButton isMenuOpen={false} />);
    expect(screen.getByTestId('navbutton')).toHaveClass('button__header button__header--off');
    expect(screen.getByTestId('navbutton')).not.toHaveClass('button__header--on');

    rerender(<NavButton isMenuOpen={true} />);
    expect(screen.getByTestId('navbutton')).toHaveClass('button__header--on');
  });
});
