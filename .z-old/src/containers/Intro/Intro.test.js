import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Intro from './Intro';

configure({ adapter: new Adapter() });

describe('Component: Intro', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Intro />
            ).length
        ).toEqual(1);
    });

});