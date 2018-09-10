export const populateEventsFromLocation = events => ({
    type: 'EVENTS_FROM_LOCATION',
    events
})

export const getPropsFromEvent = eventProps => ({
  
  type: 'EVENT_TO_VIEW',
  eventProps
})