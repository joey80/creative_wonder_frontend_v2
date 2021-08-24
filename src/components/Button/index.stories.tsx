import React from 'react';
import { Button, NavButton } from './index';

export default {
  title: 'components/Buttons',
  component: Button,
};

const Primary = () => <Button>Click Me</Button>;
const Nav = () => <NavButton isMenuOpen={false}>Open Menu</NavButton>;

export { Primary, Nav };
