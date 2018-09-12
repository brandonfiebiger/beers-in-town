export const groupToViewReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GROUP_TO_VIEW':
      return action.groupProps;
    default: 
      return state;
  }
}