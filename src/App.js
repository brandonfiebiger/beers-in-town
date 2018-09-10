import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { Search } from './containers/Search';
import ContentRouter from './components/ContentRouter/ContentRouter';
import { populateEventsFromLocation } from './actions/index';
import { eventCleaner, cleanBreweryData } from './utils/helper';


class App extends Component {
  
  async componentDidMount() {
    let cleanEvents;
    let cleanBreweries;
    navigator.geolocation.getCurrentPosition( async (location) => {
      cleanEvents = await eventCleaner(location.coords.latitude, location.coords.longitude)
      cleanBreweries = await cleanBreweryData(location.coords.latitude, location.coords.longitude)
      console.log(cleanBreweries);
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
        </section>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateEvents: events => dispatch(populateEventsFromLocation(events))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
