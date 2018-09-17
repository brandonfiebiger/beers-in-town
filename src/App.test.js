import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from './App';
import { getLocation } from './actions'
import { shallow, mount } from 'enzyme';


describe('App', () => {
  let wrapper;
  let navigator;
  let mockGetUserLocation = jest.fn()
  
  beforeEach(() => {
    wrapper = shallow(<App getUserLocation={jest.fn()}/>)
    global.navigator.geolocation = {
      getCurrentPosition: jest.fn(),
    };
    navigator = {
      geolocation: {
        getCurrentPostion: jest.fn()
      }
    }
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should call getUserLocation on componentDidMount with the correct params', async () => {
      

  //  await  wrapper.instance().componentDidMount()
    // expect(wrapper.props().getUserLocation).toHaveBeenCalled()
  })
  
  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getLocation action', () => {
      const mockDispatch = jest.fn();

      const mockLocation = { latitude: 20, longitude: 30 };
      const actionToDispatch = getLocation(mockLocation);
      
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.getUserLocation(mockLocation);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

  })

})
})