import { fetchEventDataByLocation } from './fetchEventDataByLocation';
import { populateEventsFromLocation } from '../actions';

describe('fetchEventDataByLocation', () => {

  beforeEach(() => {
    window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({events: [ {1 : {name: 'some event'} }], status: 200}) }));
  });

  it('should call dispatch with the correct params', async () => {
    let mockDispatch = jest.fn()
    await fetchEventDataByLocation()(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{"breweries": {"status": 200}, "type":"EVENTS_FROM_LOCATION"}])
  })
})