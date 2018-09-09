export const eventToViewReducer = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'EVENT_TO_VIEW':
      return action.eventProps;
    default: 
      return state;
  }
}