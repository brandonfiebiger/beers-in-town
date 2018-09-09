export const eventCleaner = (events) => {
  return events.map(event => {
    // console.log(event);
    let desc;
    const { description, venue, group } = event
    desc = description
    if(!description) {
      desc = '<p>no description available</p>'
    }
    return {desc, groupName: event.group.name, time: event.local_time, date: event.local_date, venue, group, name: event.name, id: event.id }
  })
}