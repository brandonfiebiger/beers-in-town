import { fetchEventDataBySearch } from './fetchEventDataBySearch';
import { populateBreweriesFromSearch } from '../actions/';

describe('fetchEventDataBySearch', () => {

  // beforeEach(() => {
  //   window.fetch = jest
  //   .fn()
  //   .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({status: 200}) }));
  // });

  it('should call dispatch with the correct params', async () => {
    let mockDispatch = jest.fn()
    const thunk = fetchEventDataBySearch('arlen', 'texas');
    thunk(mockDispatch)
    // await fetchEventDataBySearch()(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{events: undefined, "type":"EVENTS_FROM_SEARCH"}])
  })
})
 