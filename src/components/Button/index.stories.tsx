import React from 'react';
import { Button, NavButton } from './index';

export default {
  title: 'components/Buttons',
  component: Button,
};

const Primary = (): JSX.Element => <Button>Click Me</Button>;
const Nav = (): JSX.Element => <NavButton isMenuOpen={false}>Open Menu</NavButton>;

export { Primary, Nav };
