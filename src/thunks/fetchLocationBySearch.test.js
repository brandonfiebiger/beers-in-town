import { fetchLocationBySearch } from './fetchLocationBySearch';
import { populateGroupsFromSearch } from '../actions';

describe('fetchLocationBySearch', () => {

  it('should call dispatch with the correct params', async () => {
    let mockDispatch = jest.fn()
    const thunk = await fetchLocationBySearch()
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{breweries: undefined, "type":"BREWERIES_FROM_SEARCH"}])
  })
})