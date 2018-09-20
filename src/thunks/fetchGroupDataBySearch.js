import { apikey } from '../utils/variables';
import  { populateGroupsFromSearch, getLocation } from '../actions/';
import { cleanGroupData } from '../utils/helper';


export const fetchGroupDataBySearch = (city, state) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/2/groups?key=${apikey}&sign=true&photo-host=public&country=us&city=${city}&state=${state}&text=brewery+craft+beer&page=100`);
      const groups = await response.json();
      console.log(groups.meta.lat, groups.meta.lon)
      const cleanedGroups = await cleanGroupData(groups.results);
      dispatch(getLocation({latitude: groups.meta.lat, longitude: groups.meta.lon}))
    } catch (error) {
      // throw new Error(error.message)
      alert('not a valid location')
    }
  }
}