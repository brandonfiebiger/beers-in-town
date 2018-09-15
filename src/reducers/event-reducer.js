export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case 'EVENTS_FROM_LOCATION':
      return [...action.events];
    case 'EVENTS_FROM_SEARCH':
      return [...action.events];
    default: 
      return state;
  }
}