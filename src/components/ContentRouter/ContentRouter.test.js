import { ContentRouter, mapDispatchToProps, mapStateToProps } from './ContentRouter';
import ReactDOM from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import createRouterContext from 'react-router-test-context';
import { fetchBreweryDataByLocation } from '../../thunks/fetchBreweryDataByLocation';
import { fetchEventDataByLocation } from '../../thunks/fetchEventDataByLocation';
import { fetchGroupDataByLocation } from '../../thunks/fetchGroupDataByLocation';
jest.mock('../../thunks/fetchGroupDataByLocation')
jest.mock('../../thunks/fetchEventDataByLocation');
jest.mock('../../thunks/fetchBreweryDataByLocation');

describe('ContentRouter', () => {

  let wrapper;
  let mockEventProps;
  let mockGroupProps;
  let mockLocation;
  let mockHistory;
  let mockPopulateBreweries;

  beforeEach(() => {
    mockEventProps = {
      id: 5
    }
    
    mockHistory = { push: jest.fn() };

    mockLocation = {
      latitude: 5,
      longitude: 10
    }
    
    mockGroupProps = {
      id: 80
    }

    mockPopulateBreweries = jest.fn()

    wrapper = shallow(<ContentRouter events={[]} eventProps={ mockEventProps } groupProps={ mockGroupProps } breweries={ [] } location={ mockLocation } populateEvents={ mockPopulateBreweries } populateBreweries={ mockPopulateBreweries } history={ mockHistory }/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleEventRoute when event-button is clicked', () => {
    wrapper.instance().handleEventRoute = jest.fn()
    wrapper.find('.event-button').simulate('click');
    expect(wrapper.instance().handleEventRoute).toHaveBeenCalled();
  })

  it('should call handleGroupsRoute when event-button is clicked', () => {
    wrapper.instance().handleGroupsRoute = jest.fn()
    wrapper.find('.group-button').simulate('click');
    expect(wrapper.instance().handleGroupsRoute).toHaveBeenCalled();
  })

  it('should call handleBreweryRoute when event-button is clicked', () => {
    wrapper.instance().handleBreweryRoute = jest.fn()
    wrapper.find('.brewery-button').simulate('click');
    expect(wrapper.instance().handleBreweryRoute).toHaveBeenCalled();
  })

  describe('handleBreweryRoute', () => {
   it('should dispatch populateBreweries if there are no breweries in array', () => {
    const context = createRouterContext();
     const mockPopulateBreweries = jest.fn()
     wrapper = shallow(<ContentRouter eventProps={ mockEventProps } groupProps={ mockGroupProps } breweries={ [] } location={ mockLocation } populateBreweries={ mockPopulateBreweries } populateEvents={ jest.fn() } populateGroups={ jest.fn() } history={ mockHistory } events={ [] }/>, { context })
     wrapper.instance().handleBreweryRoute()
    
     expect(mockPopulateBreweries).toHaveBeenCalled()
    // wrapper.instance().handleEventRoute()
    // expect(wrapper.props().populateEvents).toHaveBeenCalled()
   })
  })

  describe('handleEventRoute', () => {
    it('should dispatch populateBreweries if there are no breweries in array', () => {
     const context = createRouterContext();
      const mockPopulateEvents = jest.fn()
      wrapper = shallow(<ContentRouter eventProps={ mockEventProps } groupProps={ mockGroupProps } breweries={ [] } location={ mockLocation } populateBreweries={ mockPopulateBreweries } populateEvents={ mockPopulateEvents } populateGroups={ jest.fn() } history={ mockHistory } events={ [] }/>, { context })
     wrapper.instance().handleEventRoute()
     expect(mockPopulateEvents).toHaveBeenCalled()
    })
   })

   describe('handleGroupRoute', () => {
    it('should dispatch populateGroups if there are no breweries in array', () => {
     const context = createRouterContext();
      const mockPopulateGroups = jest.fn()
      wrapper = shallow(<ContentRouter eventProps={ mockEventProps } groupProps={ mockGroupProps } breweries={ [] } location={ mockLocation } populateBreweries={ mockPopulateBreweries } populateEvents={ jest.fn() } populateGroups={ mockPopulateGroups } history={ mockHistory } events={ [] } groups={ [] }/>, { context })
     wrapper.instance().handleGroupsRoute()
     expect(mockPopulateGroups).toHaveBeenCalled()
    })
   })


  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchBreweryDataByLocation action', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = fetchBreweryDataByLocation(5, 10)
      
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.populateBreweries('Arlen', 'Texas');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with a fetchEventDataByLocation action', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = fetchBreweryDataByLocation(5, 10)
      
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.populateEvents(2, 5);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with a fetchEventDataByLocation action', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = fetchGroupDataByLocation(5, 10)
      
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.populateGroups(2, 5);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with eventProps, groupProps, location, events, groups and breweries', () => {
      const mockState = {
        eventProps: {
          id: 3
        },
        groupProps: {
          id:2
        },
        location: {latitude: 3, longitude: 3},
        events: [],
        groups: [],
        breweries: []
      }
      const expected = {
        eventProps: undefined,
        groupProps: undefined,
        location: {latitude: 3, longitude: 3},
        events: [],
        groups: [],
        breweries: []
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected);
    })
  })
})