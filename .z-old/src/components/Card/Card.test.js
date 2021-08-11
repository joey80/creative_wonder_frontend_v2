import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Component: Card', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Card />
            ).length
        ).toEqual(1);
    });

});