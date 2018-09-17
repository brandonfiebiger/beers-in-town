import { BreweryContainer } from './BreweryContainer';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('BreweryContainer', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<BreweryContainer breweries={[]}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with breweries', () => {
    wrapper = shallow(<BreweryContainer breweries={[{name: 'Boo'}]}/>)

    expect(wrapper).toMatchSnapshot()

  })
})