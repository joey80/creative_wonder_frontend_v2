import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Blog from './Blog';

configure({ adapter: new Adapter() });

describe('Component: Blog', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Blog />
            ).length
        ).toEqual(1);
    });

});