import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('Component: Button', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Button />
            ).length
        ).toEqual(1);
    });

});