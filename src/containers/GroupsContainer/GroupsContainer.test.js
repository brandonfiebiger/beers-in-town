import { GroupContainer } from './GroupsContainer';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('GroupsContainer', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<GroupContainer groups={[]}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with breweries', () => {
    wrapper = shallow(<GroupContainer groups={[{name: 'Boo'}]}/>)

    expect(wrapper).toMatchSnapshot()

  })
})