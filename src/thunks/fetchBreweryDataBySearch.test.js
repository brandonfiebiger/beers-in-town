import { fetchBreweryDataBySearch } from './fetchBreweryDataBySearch';
import { populateBreweriesFromSearch } from '../actions/';

describe('fetchBreweryDataBySearch', () => {

  beforeEach(() => {
    window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({status: 200}) }));
  });

  it('should call dispatch with the correct params', async () => {
    let mockDispatch = jest.fn()
    await fetchBreweryDataBySearch()(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{breweries: undefined, "type":"BREWERIES_FROM_SEARCH"}])
  })
})
 