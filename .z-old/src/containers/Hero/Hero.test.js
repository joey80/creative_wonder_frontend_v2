import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Hero from './Hero'

configure({ adapter: new Adapter() })

describe('Component: Hero', () => {
  it('renders without exploding', () => {
    expect(shallow(<Hero />).length).toEqual(1)
  })
})
