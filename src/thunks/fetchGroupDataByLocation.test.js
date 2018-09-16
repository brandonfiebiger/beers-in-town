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

  // it('throws an error if status code is not ok', async () => {
  //   let mockDispatch = jest.fn()

  //   const expected = new Error('failed to fetch')
  //   window.fetch = jest.fn().mockImplementation(() => Promise.reject('failed to fetch'));
  //   const thunk = await fetchGroupDataByLocation('nope', 'nada')(mockDispatch)
  //   await thunk(mockDispatch)
  //   await expect(thunk(mockDispatch)).rejects.toEqual(expected);

  // })
})