import { combineReducers } from 'redux';
import { eventReducer } from './event-reducer';
import { breweryReducer } from './brewery-reducer';
import { eventToViewReducer } from './eventToView-reducer';
import { locationReducer } from './location-reducer';
import { groupsReducer } from './groups-reducer';
import { groupToViewReducer } from './groupToView-reducer';
import { errorReducer } from './error-reducer';

const rootReducer = combineReducers({
  events: eventReducer,
  breweries: breweryReducer,
  eventToView: eventToViewReducer,
  location: locationReducer,
  groups: groupsReducer,
  groupToView: groupToViewReducer,
  hasErrored: errorReducer
})

export default rootReducer;