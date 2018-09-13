import { apikey } from '../utils/variables';
import  { populateGroupsFromLocation } from '../actions/';
import { cleanGroupData } from '../utils/helper';


export const fetchGroupDataByLocation = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/find/groups?key=${apikey}&sign=true&photo-host=public&lon=${longitude}&text=craft beer&radius=100&lat=${latitude}&page=100`);
      const groups = await response.json();
      const cleanedGroups = await cleanGroupData(groups);
      dispatch(populateGroupsFromLocation(cleanedGroups))
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

