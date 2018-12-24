import { fetchLocationBySearch } from './fetchLocationBySearch';
import { mockGroupMetaData } from '../utils/mockData';
import { fetchGroupDataByLocation } from './fetchGroupDataByLocation';
import { fetchEventDataByLocation } from './fetchEventDataByLocation';
import * as actions from '../actions';
import { fetchBreweryDataByLocation } from './fetchBreweryDataByLocation';
jest.mock('./fetchBreweryDataByLocation');
jest.mock('./fetchEventDataByLocation');
jest.mock('./fetchGroupDataByLocation');


describe('fetchLocationBySearch', () => {

  it('should call dispatch with the correct params with no args', async () => {
    let mockDispatch = jest.fn()
    await fetchLocationBySearch()(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{error: true, "type": "HAS_ERRORED"}])
  })

  it('should call dispatch with the correct params with args', async () => {

    window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockGroupMetaData) }));
    const {lat, lon} = mockGroupMetaData.meta;
    let mockDispatch = jest.fn();
    actions.noError = jest.fn();
    actions.getLocation = jest.fn();
    await fetchLocationBySearch('arlen', 'texas')(mockDispatch);
    expect(fetchBreweryDataByLocation).toHaveBeenCalledWith(lat, lon);
    expect(fetchEventDataByLocation).toHaveBeenCalledWith(lat, lon);
    expect(fetchGroupDataByLocation).toHaveBeenCalledWith(lat, lon);
    expect(actions.noError).toHaveBeenCalled();
    expect(actions.getLocation).toHaveBeenCalledWith({"latitude": 55, "longitude": 80});
  })
})