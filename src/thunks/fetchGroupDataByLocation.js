import { apikey } from '../utils/variables';
import  { populateGroupsFromLocation } from '../actions/'


export const fetchGroupDataByLocation = async (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/find/groups?key=${apikey}&sign=true&photo-host=public&lon=${longitude}&text=craft beer&radius=100&lat=${latitude}&page=100`);
      const groups = await response.json();
      // return groups;
      dispatch(populateGroupsFromLocation(groups))
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

