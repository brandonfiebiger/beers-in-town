import { GroupInfo } from './GroupInfo';
import { shallow, mount} from 'enzyme';
import React from 'react';

describe('GroupInfo', () => {

  let wrapper;
  let mockGroupProps

  beforeEach(() => {
    mockGroupProps = {
      name: 'joane'
    }
    wrapper = shallow(<GroupInfo groupProps={ mockGroupProps }/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with a photo', () => {
    mockGroupProps = {
      name: 'joane',
      group_photo: {
        photo_link: 'yay'
      }
    }

    expect(wrapper).toMatchSnapshot()
  })
})