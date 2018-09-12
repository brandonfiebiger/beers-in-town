export const breweryReducer = (state = [], action) => {
  switch (action.type) {
    case 'BREWERIES_FROM_LOCATION':
      return [...action.breweries];
    default: 
      return state;
  }
}