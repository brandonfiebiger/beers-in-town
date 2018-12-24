import { apikey } from '../utils/variables'
import { populateBreweriesFromLocation, hasErrored } from '../actions/';

export const fetchBreweryDataByLocation = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const url = `https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/venues?key=${process.env.REACT_APP_APIKEY}&sign=true&photo-host=secure&text=brewery&lon=${longitude}&radius=100&lat=${latitude}&page=200`;
      const response = await fetch(url);
      const breweries = await response.json();
      dispatch(populateBreweriesFromLocation(breweries))
    } catch (error) {
       dispatch(hasErrored(true))
    }
  }
}
