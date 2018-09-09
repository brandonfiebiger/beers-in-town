import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { url } from './utils/variables';
import { Search } from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { populateFromLocation } from './actions/index';
import { eventCleaner } from './utils/helper';
import { EventInfo } from '../src/containers/EventInfo/EventInfo';


class App extends Component {
  
  async componentDidMount() {
    let cleanEvents;
    navigator.geolocation.getCurrentPosition( async (location) => {
      cleanEvents = await eventCleaner(location.coords.latitude, location.coords.longitude)
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      this.props.populateEvents(cleanEvents)
    });
  }
  
  render() {

    return (
      <div className="App">
        <h1>BEERS IN TOWN</h1>
        <Search />
        <section>
          <ContentRouter />
          {/* <Route exact path={'/events/eventinfo'} render={() => <EventInfo time={'this.props'} />}/> */}

        </section>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateEvents: events => dispatch(populateFromLocation(events))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
