import { groupsReducer } from './groups-reducer';
import * as actions from '../actions';


describe('groupsReducer', () => {
  it('should return intial state by default', () => {
    const expected = [];
    const result = groupsReducer(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should return an array containing all of the breweries if action GROUPS_FROM_LOCATION is passed in', () => {
    const expected = ['groups'];
    const action = { type: 'GROUPS_FROM_LOCATION', groups: expected };

    const result = groupsReducer([], action);

    expect(result).toEqual(expected);
  })
})
