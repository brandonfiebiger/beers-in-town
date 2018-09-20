export const errorReducer = (state = false, action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.error;
    case 'NO_ERROR':
      return action.error;
    default:
      return state;
  }
}