export const eventToViewReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EVENT_TO_VIEW':
      return action.eventProps;
    default: 
      return state;
  }
}