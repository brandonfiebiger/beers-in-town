import { eventReducer } from './event-reducer';
import * as actions from '../actions';
import { mockBreweryStateData } from '../utils/mockData';


describe('eventReducer', () => {
  it('should return intial state by default', () => {
    const expected = [];
    const result = eventReducer(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should return an array containing all of the breweries if action BREWERIES_FROM_LOCATION is passed in', () => {
    const expected = [mockBreweryStateData];
    const action = { type: 'EVENTS_FROM_LOCATION', events: [mockBreweryStateData] };

    const result = eventReducer([], action);

    expect(result).toEqual(expected);
  })
})