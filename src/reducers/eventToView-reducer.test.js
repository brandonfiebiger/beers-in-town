import { eventToViewReducer } from './eventToView-reducer';
import * as actions from '../actions';
import { mockBreweryStateData } from '../utils/mockData';


describe('eventToViewReducer', () => {
  it('should return intial state by default', () => {
    const expected = {};
    const result = eventToViewReducer(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should return an array containing all of the breweries if action EVENT_TO_VIEW is passed in', () => {
    const expected = [mockBreweryStateData];
    const action = { type: 'EVENT_TO_VIEW', eventProps: [mockBreweryStateData] };

    const result = eventToViewReducer([], action);

    expect(result).toEqual(expected);
  })
})