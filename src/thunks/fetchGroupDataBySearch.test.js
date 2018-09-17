import { fetchGroupDataBySearch } from './fetchGroupDataBySearch';
import { populateGroupsFromSearch } from '../actions/';

describe('fetchGroupDataBySearch', () => {

  it('should call dispatch with the correct params', async () => {
    let mockDispatch = jest.fn()
    const thunk = await fetchGroupDataBySearch()
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{breweries: undefined, "type":"BREWERIES_FROM_SEARCH"}])
  })
})