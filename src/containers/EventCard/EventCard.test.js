import  { EventCard, mapDispatchToProps, mapStateToProps }  from './EventCard';
import { getPropsFromEvent } from '../../actions';
import { shallow, mount } from 'enzyme';
import React from 'react';


describe('EventCard', () => {

  let wrapper;
  let mockDispatch
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn()
    wrapper = shallow(<EventCard sendPropsFromCard={mockFn}/>)
    mockDispatch = jest.fn()
  })


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })



    it('should call sendPropsFromCard with the correct parameters', () => {

      const mappedProps = mapDispatchToProps(mockDispatch)

      wrapper.instance().handleClick()

      expect(mockFn).toHaveBeenCalled();
    })
 


  describe('mapStateToProps', () => {

    it('should return an object with the events array', () => {
      const mockState = {
        events: ['some event', 'another event']
      }

      const expected = {
        events: ['some event', 'another event']
      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with a getPropsFromEvent action', () => {
      const mockDispatch = jest.fn();

      const mockProps = {time: 400, status: 'open'};

      const actionToDispatch = getPropsFromEvent(mockProps);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.sendPropsFromCard(mockProps);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})