import React from 'react';
import ReactDOM from 'react-dom';
import { Search, mapDispatchToProps } from './Search';
import { shallow, mount } from 'enzyme';
import { fetchEventDataBySearch } from '../thunks/fetchEventDataBySearch';


describe('Search', () => {
  let mockHistory;
  let wrapper;
  let event
  beforeEach(() => {
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 'hello',
        name: 'name',
      },
    };
    mockHistory = { push: jest.fn() };
    wrapper = shallow(<Search getEvents={ jest.fn() } getGroups={ jest.fn() } getBreweries={ jest.fn() } history={ mockHistory }/>)
  })


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  // it('should call getEvents, getBreweries and getGroups when handleSubmit is invoked', () => {
  //   wrapper = shallow(<Search getEvents={ jest.fn() } getGroups={ jest.fn() } getBreweries={ jest.fn() } history={ mockHistory }/>)

  //   wrapper.state().city = 'Arlen';
  //   wrapper.state().state = 'Texas';
  //   wrapper.instance().handleSubmit(event)
  //   console.log(wrapper.instance().getBreweries)
  //   expect().toHaveBeenCalledWith()
  // })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchEventDataBySearch action', () => {
      const mockDispatch = jest.fn();

      const mockLocation = { city: 'Arlen', state: 'Texas' };
      const actionToDispatch = fetchEventDataBySearch('Arlen', 'Texas')
      
      const mappedProps = mapDispatchToProps(mockDispatch);
      console.log(mappedProps)

      mappedProps.getEvents('Arlen', 'Texas');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })
  })
})