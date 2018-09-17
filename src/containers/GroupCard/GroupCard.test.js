import { GroupCard, mapDispatchToProps, mapStateToProps } from './GroupCard';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { getPropsFromGroup } from '../../actions';



describe('GroupCard', () => {

  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn()
    wrapper = shallow(<GroupCard sendPropsFromCard={ mockFn }/>)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call sendPropsFromCard when handleClick is invoked', () => {
    wrapper.instance().handleClick()
    expect(mockFn).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with a getPropsFromEvent action', () => {
      const mockDispatch = jest.fn();

      const mockProps = {time: 400, status: 'open'};

      const actionToDispatch = getPropsFromGroup(mockProps);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.sendPropsFromCard(mockProps);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {

    it('should return an object with the groups array', () => {
      const mockState = {
        groups: ['some group', 'another group']
      }

      const expected = {
        events: ['some group', 'another group']
      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })
})