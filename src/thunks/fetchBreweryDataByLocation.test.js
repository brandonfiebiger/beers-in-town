import { fetchBreweryDataByLocation } from './fetchBreweryDataByLocation';
import { populateBreweriesFromLocation } from '../actions/';

describe('fetchBreweryDataByLocation', () => {

  beforeEach(() => {
    window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({status: 200}) }));
  });

  it('should call dispatch with the correct params', async () => {
    let mockDispatch = jest.fn()
    await fetchBreweryDataByLocation()(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{"breweries": {"status": 200}, "type":"BREWERIES_FROM_LOCATION"}])
  })
})