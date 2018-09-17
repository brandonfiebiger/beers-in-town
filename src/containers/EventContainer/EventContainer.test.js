import { EventContainer } from './EventContainer';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('EventContainer', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<EventContainer events={[]}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with events', () => {
    wrapper = shallow(<EventContainer events={[{name: 'Boo'}]}/>)

    expect(wrapper).toMatchSnapshot()

  })
})