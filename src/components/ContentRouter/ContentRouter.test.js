import { ContentRouter } from './ContentRouter';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('ContentRouter', () => {

  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<ContentRouter />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})