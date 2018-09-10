import { apikey } from '../utils/variables';


export const fetchGroupDataByLocation = async (latitude, longitude) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://api.meetup.com/find/groups?key=${apikey}&sign=true&photo-host=public&lon=${longitude}&text=craft beer&radius=100&lat=${latitude}&page=100`);
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

