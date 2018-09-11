export const populateEventsFromLocation = events => ({
    type: 'EVENTS_FROM_LOCATION',
    events
})

export const getPropsFromEvent = eventProps => ({
  type: 'EVENT_TO_VIEW',
  eventProps
})

export const populateBreweriesFromLocation = breweries => ({
  type: 'BREWERIES_FROM_LOCATION',
  breweries
})

export const getLocation = location => ({
  type: 'LOCATION_AVAILABLE',
  location
})

export const populateGroupsFromLocation = groups => ({
  type: 'GROUPS_FROM_LOCATION',
  groups
})