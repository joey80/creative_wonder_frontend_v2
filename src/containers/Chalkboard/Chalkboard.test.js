import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chalkboard from './Chalkboard';

configure({ adapter: new Adapter() });

describe('Component: Chalkboard', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Chalkboard />
            ).length
        ).toEqual(1);
    });

});
