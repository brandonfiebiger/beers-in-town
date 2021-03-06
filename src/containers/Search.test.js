import React from 'react';
import ReactDOM from 'react-dom';
import { mapDispatchToProps } from './Search';
import  { Search } from './Search';
import { shallow, mount } from 'enzyme';
import createRouterContext from 'react-router-test-context';
import { fetchLocationBySearch } from '../thunks/fetchLocationBySearch';
import { hasErrored } from '../actions';
jest.mock('../thunks/fetchLocationBySearch');


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

  it('should call getLocation and history.push when handleSubmit is invoked', () => {
    let mockDispatch = jest.fn()
    const context = createRouterContext();
    wrapper = mount(<Search getLocation={ jest.fn() } history={ mockHistory }/>, { context })

    wrapper.state().city = 'Arlen';
    wrapper.state().state = 'Texas';
    wrapper.instance().handleSubmit(event)
    expect(wrapper.props().getLocation).toHaveBeenCalledWith('Arlen', 'Texas');
  })

  it('should update state when handleChange is called', () => {
    let mockEvent = {preventDefault: jest.fn(),
    target: {
      value: 'hello',
      name: 'city',
    },
  };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('city')).toEqual('hello')
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchLocationBySearch action', () => {
      const mockDispatch = jest.fn();

      const mockLocation = { city: 'Arlen', state: 'Texas' };
      const actionToDispatch = fetchLocationBySearch('Arlen', 'Texas')
      
      const mappedProps = mapDispatchToProps(mockDispatch);
      console.log(actionToDispatch)

      mappedProps.getLocation('Arlen', 'Texas');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })  
    
    it('calls dispatch with a hasErrored action', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = hasErrored()
      
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.hasErrored();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })
  })
})