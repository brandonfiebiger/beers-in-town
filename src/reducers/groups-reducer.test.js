import { groupReducer } from './group-reducer';
import * as actions from '../actions';
// import { mockgroupStateData } from '../utils/mockData';


describe('groupReducer', () => {
  it('should return intial state by default', () => {
    const expected = [];
    const result = groupReducer(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should return an array containing all of the breweries if action BREWERIES_FROM_LOCATION is passed in', () => {
    const expected = [mockgroupStateData];
    const action = { type: 'GROUPS_FROM_LOCATION', groups: [mockgroupStateData] };

    const result = groupReducer([], action);

    expect(result).toEqual(expected);
  })
})
