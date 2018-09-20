import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './Nav';

configure({ adapter: new Adapter() });

describe('Component: Nav', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Nav />
            ).length
        ).toEqual(1);
    });

});