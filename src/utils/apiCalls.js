import { breweryUrl } from './variables';

export const fetchBreweryData = async () => {
  const response = await fetch(breweryUrl);
  const breweries = await response.json();
  console.log(breweries)
}

