import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Component: Footer', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Footer />
            ).length
        ).toEqual(1);
    });

});