import { populateEventsFromSearch } from '../actions/';
import { apikey } from '../utils/variables';
import { eventCleaner } from '../utils/helper';

export const fetchEventDataBySearch = (city, state) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.meetup.com/2/open_events?key=766f10297e73965263a3b52f693770&sign=true&photo-host=public&country=us&city=${city}&state=${state}&text=brewery&page=100`);
      const events = await response.json();
      const cleanEvents = await eventCleaner(events.results);
      console.log(cleanEvents)
      dispatch(populateEventsFromSearch(cleanEvents))
    } catch (error) {
       throw new Error(error.message)
    }
  }
}


