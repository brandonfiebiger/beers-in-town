import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import  EventContainer  from '../../containers/EventContainer/EventContainer';
import BreweryContainer  from '../../containers/BreweryContainer/BreweryContainer';
import GroupsContainer from '../../containers/GroupsContainer/GroupsContainer';
import EventInfo from '../../containers/EventInfo/EventInfo';
import GroupInfo from '../../containers/GroupInfo/GroupInfo';
import { connect } from 'react-redux';
import { fetchBreweryDataByLocation } from '../../thunks/fetchBreweryDataByLocation';
import { fetchEventDataByLocation } from '../../thunks/fetchEventDataByLocation';
import { fetchGroupDataByLocation } from '../../thunks/fetchGroupDataByLocation';
import './ContentRouter.css';

export class ContentRouter extends Component {
  constructor() {
    super()

    this.state = {
      selected: ''
    }
  }

 handleBreweryRoute = () => {
    const { location, populateBreweries, history, breweries } = this.props;
    if (!breweries.length) {
      populateBreweries(location.latitude, location.longitude);
    }
    history.push('/breweries');
    this.setState({
      selected: 'breweries'
    })
  }

 handleEventRoute = () => {
    const { location, populateEvents, history, events } = this.props;
    if (!events.length) {
      populateEvents(location.latitude, location.longitude);
    }
    history.push('/events');
    this.setState({
      selected: 'events'
    })
  }

 handleGroupsRoute = () => {
    const { location, populateGroups, history, groups } = this.props;
    if (!groups.length) {
      populateGroups(location.latitude, location.longitude);
    }
    history.push('/groups')
    this.setState({
      selected: 'groups'
    })
  }

  render() {
    return(
      <div>
      <header>
        <button className={this.state.selected === 'events' ? "event-button selected" : "event-button"} onClick={() => this.handleEventRoute()}>events</button>
        <button className={this.state.selected === 'breweries' ? "brewery-button selected" : "brewery-button"} onClick={() => this.handleBreweryRoute()}>breweries</button>
        <button className={this.state.selected === 'groups' ? "group-button selected" : "group-button"} onClick={() => this.handleGroupsRoute()}>groups</button>
      </header>
        <Route exact path= '/events' component={EventContainer} />
        <Route exact path= '/breweries' component={BreweryContainer} />
        <Route exact path= '/groups' component={GroupsContainer} />
        <Route exact path={`/events/${this.props.eventProps.id}`} render={() => <EventInfo {...this.props} />}/>
        <Route exact path={`/groups/${this.props.groupProps.id}`} render={() => <GroupInfo {...this.props} />}/>
      </div>
    )
  }

}



export const mapStateToProps = state => ({
  eventProps: state.eventToView,
  groupProps: state.groupToView,
  location: state.location,
  events: state.events,
  groups: state.groups,
  breweries: state.breweries
})

export const mapDispatchToProps = dispatch => ({
  populateEvents: (latitude, longitude) => dispatch(fetchEventDataByLocation(latitude, longitude)),
  populateGroups: (latitude, longitude) => dispatch(fetchGroupDataByLocation(latitude, longitude)),
  populateBreweries: (latitude, longitude) => dispatch(fetchBreweryDataByLocation(latitude, longitude))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentRouter));