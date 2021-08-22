import { NavDataTypes } from './types';

const data: NavDataTypes = {
  links: [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Examples' },
    { name: 'Blog', children: [{ name: 'Nintendo' }, { name: 'Sony' }, { name: 'Microsoft' }] },
    {
      name: 'Gallery',
      children: [
        { name: 'Go To Bed' },
        { name: 'Brush Teeth' },
        { name: 'Floss' },
        { name: 'Jump Rope' },
      ],
    },
    { name: 'Contact Us' },
  ],
};

export { data };
