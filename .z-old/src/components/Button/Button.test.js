import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('Button Component', () => {

    it('renders without exploding', () => {
        expect(
            shallow(
                <Button />
            ).length
        ).toEqual(1);
    });

    it('handles on click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
      });

});
