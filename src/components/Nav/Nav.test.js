import React from 'react';
import Nav from './Nav';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const nav = renderer
    .create(<Nav />)
    .toJSON()
  expect(nav).toMatchSnapshot()
});
