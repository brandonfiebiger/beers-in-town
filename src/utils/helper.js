import { fetchBreweryDataByLocation, fetchEventDataByLocation } from './apiCalls'

export const eventCleaner = (events) => {
  return events.map(event => {
    let desc;
    let ven
    const { description, venue, group } = event
    desc = description
    ven = venue
    if(!description) {
      desc = '<p>no description available</p>'
    }
    if(!venue) {
      ven = {name: 'venue not available'}
    }
    return {desc, groupName: event.group.name, time: event.local_time, date: event.local_date, ven, group, name: event.name, id: event.id }
  })
}

export const cleanBreweryData = async (latitude, longitude) => {
  const fetchedBreweries = await fetchBreweryDataByLocation(latitude, longitude)
  console.log(fetchedBreweries)

}

export const cleanGroupData = (unCleanEvents) => {
  return unCleanEvents.map(event => {
    return {
      name: event.name,
      id: event.id,
      status: event.status,
      urlname: event.urlname,
      description: event.description,
      city: event.city,
      state: event.state,
      members: event.members,
      group_photo: event.group_photo,
      key_photo: event.key_photo,
      category: event.category,
      organizer: event.organizer,
      next_event: event.next_event,
      photo: event.photo,
      country: event.country
    }
  })
}
