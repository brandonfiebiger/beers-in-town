import { populateEventsFromLocation, hasErrored } from '../actions/';
import { eventCleaner } from '../utils/helper';

export const fetchEventDataByLocation = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?key=${process.env.REACT_APP_APIKEY}&sign=true&photo-host=public&lon=${longitude}&page=2000&text=craft beer, brewery&radius=100&lat=${latitude}`);
      const events = await response.json();
      const cleanEvents = await eventCleaner(events.events);
      dispatch(populateEventsFromLocation(cleanEvents))
    } catch (error) {
       dispatch(hasErrored(true))
    }
  }
}


