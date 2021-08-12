interface ButtonType {
  onClick: () => void;
  variant: 'small';
}

interface NavButtonType extends Pick<ButtonType, 'onClick'> {
  isMenuOpen: boolean;
}

export type { ButtonType, NavButtonType };
