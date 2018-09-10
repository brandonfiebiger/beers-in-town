import { populateEventsFromLocation } from '../actions/';
import { apikey } from '../utils/variables';
import { eventCleaner } from '../utils/helper';

export const fetchEventDataByLocation = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/find/upcoming_events?key=${apikey}&sign=true&photo-host=public&lon=${longitude}&page=100&text=craft beer, brewery&radius=100&lat=${latitude}`);
      const events = await response.json();
      const cleanEvents = await eventCleaner(events.events);
      dispatch(populateEventsFromLocation(cleanEvents))
    } catch (error) {
       throw new Error(error.message)
    }
  }
}