import React from 'react';
import { BreweryCard } from './BreweryCard';
import { shallow, mount } from 'enzyme';


describe('BreweryCard', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BreweryCard />)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})