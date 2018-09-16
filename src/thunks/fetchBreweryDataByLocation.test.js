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

  it('throws an error if status code is not ok', async () => {
    let mockDispatch = jest.fn()

    const expected = new Error('failed to fetch')
    window.fetch = jest.fn().mockImplementation(() => Promise.reject('failed to fetch'));
    const thunk = await fetchBreweryDataByLocation('nope', 'nada')(mockDispatch)
    await thunk(mockDispatch)
    await expect(thunk(mockDispatch)).rejects.toEqual(expected);

  })
})