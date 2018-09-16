import React from 'react';
import { EventInfo } from './EventInfo';
import { shallow, mount } from 'enzyme';
import { mockEventProps, mockEventPropsWithoutVenue } from '../../utils/mockData';


describe('EventInfo', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventInfo eventProps={mockEventProps}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot without a venue', () => {
    wrapper = shallow(<EventInfo eventProps={mockEventPropsWithoutVenue} />)

    expect(wrapper).toMatchSnapshot()
  })
})