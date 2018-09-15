import { apikey } from '../utils/variables'
import { populateBreweriesFromSearch } from '../actions/';

export const fetchBreweryDataBySearch = (city, state) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/2/open_venues?key=${apikey}&sign=true&photo-host=public&country=us&city=${city}&state=${state}&text=brewery+craft+beer&page=100`);
      const breweries = await response.json();
      dispatch(populateBreweriesFromSearch(breweries.results))
    } catch (error) {
       throw new Error(error.message)
    }
  }
}
