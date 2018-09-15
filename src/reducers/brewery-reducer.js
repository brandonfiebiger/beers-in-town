export const breweryReducer = (state = [], action) => {
  switch (action.type) {
    case 'BREWERIES_FROM_LOCATION':
      return [...action.breweries];
    case 'BREWERIES_FROM_SEARCH':
      return [...action.breweries];
    default: 
      return state;
  }
}