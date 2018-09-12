import { locationReducer } from './location-reducer';
import * as actions from '../actions';


describe('locationReducer', () => {
  it('should return intial state by default', () => {
    const expected = {};
    const result = locationReducer(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should return an array containing all of the breweries if action BREWERIES_FROM_LOCATION is passed in', () => {
    const expected = {latitude: 40, longitude: 50};
    const action = { type: 'LOCATION_AVAILABLE', location: expected };

    const result = locationReducer([], action);

    expect(result).toEqual(expected);
  })
})
