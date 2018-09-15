export const groupsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GROUPS_FROM_LOCATION':
      return action.groups;
    case 'GROUPS_FROM_SEARCH':
      return action.groups;
    default:
      return state;
  } 
}