import { apikey } from './variables';


export const fetchBreweryDataByLocation = async (latitude, longitude) => {
  const response = await fetch(`https://api.meetup.com/find/venues?key=${apikey}&sign=true&photo-host=secure&text=brewery&lon=${longitude}&radius=100&lat=${latitude}&page=100`);
  const breweries = await response.json();
  return breweries;
}

export const fetchEventDataByLocation = async (latitude, longitude) => {
  const response = await fetch(`https://api.meetup.com/find/upcoming_events?key=${apikey}&sign=true&photo-host=public&lon=${longitude}&page=50&text=craft beer, brewery&radius=50&lat=${latitude}`);
  const breweries = await response.json();
  return Promise.all(breweries.events);
}
