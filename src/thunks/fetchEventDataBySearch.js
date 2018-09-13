import { populateEventsFromSearch } from '../actions/';
import { apikey } from '../utils/variables';
import { eventCleaner } from '../utils/helper';

export const fetchEventDataBySearch = (searchedLocation) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/find/events?key=${apikey}&sign=true&photo-host=public&location=${searchedLocation}&text=craft beer&page=100`);
      const events = await response.json();
      const cleanEvents = await eventCleaner(events);
      dispatch(populateEventsFromSearch(events))
    } catch (error) {
       throw new Error(error.message)
    }
  }
}


