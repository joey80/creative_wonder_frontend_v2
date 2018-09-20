import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from './Content';

configure({ adapter: new Adapter() });

describe('Component: Content', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Content />
            ).length
        ).toEqual(1);
    });

});