import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'small';
}

interface NavButtonProps extends Pick<ButtonProps, 'onClick'> {
  isMenuOpen: boolean;
}

interface ButtonType {
  ({ children, onClick, variant }: React.PropsWithChildren<ButtonProps>): JSX.Element;
}

interface NavButtonType {
  ({ children, isMenuOpen, onClick }: React.PropsWithChildren<NavButtonProps>): JSX.Element;
}

export type { ButtonType, NavButtonType };
