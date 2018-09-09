import { combineReducers } from 'redux';
import { eventReducer } from './event-reducer';
import { eventToViewReducer } from './eventToView-reducer'

const rootReducer = combineReducers({
  events: eventReducer,
  eventToView: eventToViewReducer
})

export default rootReducer;