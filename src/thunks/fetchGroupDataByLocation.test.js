import { fetchGroupDataByLocation } from './fetchGroupDataByLocation';
import { populateGroupsFromLocation } from '../actions/';
import { mockCleanedGroups } from '../utils/mockData';

describe('fetchGroupDataByLocation', () => {

  beforeEach(() => {
    window.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockCleanedGroups) }));
  });

  it('should call dispatch with the correct params', async () => {
    let mockDispatch = jest.fn()
    await fetchGroupDataByLocation()(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(...[{groups: mockCleanedGroups, "type":"GROUPS_FROM_LOCATION"}])
  })

})