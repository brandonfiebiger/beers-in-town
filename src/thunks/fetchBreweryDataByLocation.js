import { apikey } from '../utils/variables'
import { populateBreweriesFromLocation } from '../actions/';

export const fetchBreweryDataByLocation = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/find/venues?key=${apikey}&sign=true&photo-host=secure&text=brewery&lon=${longitude}&radius=100&lat=${latitude}&page=200`);
      //add condition to check that response is ok check thunk lesson
      const breweries = await response.json();
      dispatch(populateBreweriesFromLocation(breweries))
    } catch (error) {
       alert('could not get your location')
    }
  }
}
