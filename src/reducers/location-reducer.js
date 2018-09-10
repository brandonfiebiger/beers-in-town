export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOCATION_AVAILABLE':
      return action.location;
    default: 
      return state;
  }
}