export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case 'EVENTS_FROM_LOCATION':
      return [...action.events];
    default: 
      return state;
  }
}