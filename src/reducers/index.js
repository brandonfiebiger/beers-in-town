import { combineReducers } from 'redux';
import { eventReducer } from './event-reducer';
import { breweryReducer } from './brewery-reducer';
import { eventToViewReducer } from './eventToView-reducer';

const rootReducer = combineReducers({
  events: eventReducer,
  breweries: breweryReducer,
  eventToView: eventToViewReducer
})

export default rootReducer;