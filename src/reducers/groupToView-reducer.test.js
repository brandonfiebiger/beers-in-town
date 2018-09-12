import { groupToViewReducer } from './groupToView-reducer';
import * as actions from '../actions';


describe('groupToViewReducer', () => {
  it('should return intial state by default', () => {
    const expected = {};
    const result = groupToViewReducer(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should return an array containing all of the breweries if action EVENT_TO_VIEW is passed in', () => {
    const expected = {hello: 'friend'};
    const action = { type: 'GROUP_TO_VIEW', groupProps: expected };

    const result = groupToViewReducer([], action);

    expect(result).toEqual(expected);
  })
})