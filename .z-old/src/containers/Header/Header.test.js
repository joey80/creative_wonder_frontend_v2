import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Component: Header', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Header />
            ).length
        ).toEqual(1);
    });

});