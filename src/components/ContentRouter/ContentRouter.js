import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import  EventContainer  from '../../containers/EventContainer/EventContainer';
import BreweryContainer  from '../../containers/BreweryContainer/BreweryContainer';
import GroupsContainer from '../../containers/GroupsContainer/GroupsContainer';
import EventInfo from '../../containers/EventInfo/EventInfo';
import { connect } from 'react-redux';
import { fetchBreweryDataByLocation } from '../../thunks/fetchBreweryDataByLocation';
import { fetchEventDataByLocation } from '../../thunks/fetchEventDataByLocation';
import { fetchGroupDataByLocation } from '../../thunks/fetchGroupDataByLocation';


const ContentRouter = (props) => {

  const handleBreweryRoute = async () => {
    const { location, populateBreweries, history } = props;
    await populateBreweries(location.latitude, location.longitude);
    history.push('/breweries');
  }

  const handleEventRoute = async () => {
    const { location, populateEvents, history } = props;
    await populateEvents(location.latitude, location.longitude);
    history.push('/events');
  }

  const handleGroupsRoute = async () => {
    const { location, populateGroups, history } = props;
    // console.log(location)
    // await fetchGroupDataByLocation(location.latitude, location.longitude)
    // await populateGroups(location.latitude, location.longitude);
    history.push('/groups')
  }


  return(
    <div>
    <header>
      <button onClick={() => handleEventRoute()}>events</button>
      <button onClick={() => handleBreweryRoute()}>breweries</button>
      <button onClick={() => handleGroupsRoute()}>groups</button>
    </header>
      <Route exact path= '/events' component={EventContainer} />
      <Route exact path= '/breweries' component={BreweryContainer} />
      <Route exact path= '/groups' component={GroupsContainer} />
      <Route exact path={`/events/${props.cardsProps.id}`} render={() => <EventInfo {...props} />}/>
    </div>
  )
}

export const mapStateToProps = state => ({
  cardsProps: state.eventToView,
  location: state.location
})

export const mapDispatchToProps = dispatch => ({
  populateEvents: (latitude, longitude) => dispatch(fetchEventDataByLocation(latitude, longitude)),
  populateGroups: (latitude, longitude) => dispatch(fetchGroupDataByLocation(latitude, longitude)),
  populateBreweries: (latitude, longitude) => dispatch(fetchBreweryDataByLocation(latitude, longitude))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentRouter));