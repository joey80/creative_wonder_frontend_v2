import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
  it('renders the correct class variants', () => {
    // menu is closed by default
    // menu opens on click
    // menu closes on click
    // open menu closes on scroll
    render(<Header />);
    // expect(screen.getByTestId('button')).toHaveClass('button');
    // expect(screen.getByTestId('button')).not.toHaveClass('button--small');

    // rerender(<Button variant="small" />);
    // expect(screen.getByTestId('button')).toHaveClass('button--small');
  });
});

// describe('NavButton', () => {
//   it('renders the correct class variants', () => {
//     const { rerender } = render(<NavButton isMenuOpen={false} />);
//     expect(screen.getByTestId('navbutton')).toHaveClass('button__header button__header--off');
//     expect(screen.getByTestId('navbutton')).not.toHaveClass('button__header--on');

//     rerender(<NavButton isMenuOpen={true} />);
//     expect(screen.getByTestId('navbutton')).toHaveClass('button__header--on');
//   });
// });
