export const populateEventsFromLocation = events => ({
    type: 'EVENTS_FROM_LOCATION',
    events
})

export const populateEventsFromSearch = events => ({
  type: 'EVENTS_FROM_SEARCH',
  events
})

export const getPropsFromEvent = eventProps => ({
  type: 'EVENT_TO_VIEW',
  eventProps
})

export const getPropsFromGroup = groupProps => ({
  type: 'GROUP_TO_VIEW',
  groupProps
})

export const populateBreweriesFromLocation = breweries => ({
  type: 'BREWERIES_FROM_LOCATION',
  breweries
})

export const populateBreweriesFromSearch = breweries => ({
  type: 'BREWERIES_FROM_SEARCH',
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

export const populateGroupsFromSearch = groups => ({
  type: 'GROUPS_FROM_SEARCH',
  groups
})

export const hasErrored = error => ({
  type: 'HAS_ERRORED',
  error
})