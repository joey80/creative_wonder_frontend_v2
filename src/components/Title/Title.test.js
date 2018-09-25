import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';

configure({ adapter: new Adapter() });

describe('Component: Title', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Title />
            ).length
        ).toEqual(1);
    });

});