import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cards from './Cards';

configure({ adapter: new Adapter() });

describe('Component: Chalkboard', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Cards />
            ).length
        ).toEqual(1);
    });

});
