import { breweryReducer } from './brewery-reducer';
import * as actions from '../actions';
import { mockBreweryStateData } from '../utils/mockData';


describe('breweryReducer', () => {
  it('should return intial state by default', () => {
    const expected = [];
    const result = breweryReducer(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should return an array containing all of the breweries if action BREWERIES_FROM_LOCATION is passed in', () => {
    const expected = [mockBreweryStateData];
    const action = { type: 'BREWERIES_FROM_LOCATION', breweries: [mockBreweryStateData] };

    const result = breweryReducer([], action);

    expect(result).toEqual(expected);
  })
})
