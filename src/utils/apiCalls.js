import { breweryUrl } from './variables';

export const fetchBreweryData = async () => {
  const response = await fetch(breweryUrl);
  const breweries = await response.json();
  return breweries;
}

