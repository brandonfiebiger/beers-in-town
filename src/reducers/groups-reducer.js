export const groupsReducer = (state = [], action) => {
  console.log(action, 'hello')
  switch(action.type) {
    case 'GROUPS_FROM_LOCATION':
      return action.groups;
    default:
      return state;
  } 
}