import { apikey } from '../utils/variables';
import  { getLocation, hasErrored, noError } from '../actions';
import { cleanGroupData } from '../utils/helper';
import { fetchBreweryDataByLocation } from './fetchBreweryDataByLocation';
import { fetchEventDataByLocation } from './fetchEventDataByLocation';
import { fetchGroupDataByLocation } from './fetchGroupDataByLocation';


export const fetchLocationBySearch = (city, state) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/groups?key=${apikey}&sign=true&photo-host=public&country=us&city=${city}&state=${state}&text=brewery+craft+beer&page=100`);
      const groups = await response.json();
      const cleanedGroups = await cleanGroupData(groups.results);
      dispatch(noError(false));
      dispatch(getLocation({latitude: groups.meta.lat, longitude: groups.meta.lon}));
      dispatch(fetchBreweryDataByLocation(groups.meta.lat, groups.meta.lon))
      dispatch(fetchEventDataByLocation(groups.meta.lat, groups.meta.lon))
      dispatch(fetchGroupDataByLocation(groups.meta.lat, groups.meta.lon))
    } catch (error) {
      dispatch(hasErrored(true));
    }
  }
}