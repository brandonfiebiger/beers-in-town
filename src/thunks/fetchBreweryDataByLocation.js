import { apikey } from '../utils/variables'
import { populateBreweriesFromLocation } from '../actions/';

export const fetchBreweryDataByLocation = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/find/venues?key=${apikey}&sign=true&photo-host=secure&text=brewery&lon=${longitude}&radius=100&lat=${latitude}&page=100`);
      const breweries = await response.json();
      console.log(breweries)
      dispatch(populateBreweriesFromLocation(breweries))
    } catch (error) {
       throw new Error(error.message)
    }
  }
}
